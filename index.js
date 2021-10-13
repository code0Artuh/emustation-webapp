const  express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//importando os dois js que estão interligando com o banco de dados
const database = require('./model/database/index.js');
const jogos = require('./model/index.js');

//funções async trabalhando com promise com o banco de dados
(async () => {
    await database.sync();
    const product = await jogos.findAll();
    console.log(product);

})();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.render("index")
  });

  app.get("/details/:id", async (req, res) => {
    const id = req.params.id;
    const jogo = await jogos.findAll({from: {jogos}, where:{id:id}});
    res.render("details", {jogo});
  });

  app.get("/snes", async (req, res) => {
    const lista = await jogos.findAll({from:{jogos},where:{cons:'Snes'}});
    res.render("snes", {lista});
  }); 

  app.get("/md", async (req, res) => {
    const lista = await jogos.findAll({from:{jogos},where:{cons:'Md'}});
    res.render("md", {lista});
  });


  //Aqui esta recebendo os cadastros e mandando pro banco de dados
  app.post("/new", (req, res) => {
    const {
      nome,
      tipo,
      imagem,
      descricao,
      cons
    } = req.body;
    jogos.create({
      nome:nome,
      tipo:tipo,
      descricao:descricao,
      imagem:imagem,
      cons:cons
    })
    res.redirect("/")
  });


app.listen(port, () => console.log(`Running in http://localhost:${port}`));
