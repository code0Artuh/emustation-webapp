const  express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//importando os dois js que estão interligando com o banco de dados
const database = require('./db');
const jogos = require('./jogos');

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

  app.get("/details/:id", (req, res) => {
    const id = req.params.id;
    const jogo = Game[id];
    res.render("details", {
      jogo,
    });
  });

  app.get("/cadastrosnes", (req, res) => {
    res.render("cadastrosnes");
  });

  app.get("/cadastromd", (req, res) => {

    res.render("cadastromd");
  });

  app.get("/snes", (req, res) => {
    res.render("snes");
  }); 

  app.get("/md", async (req, res) => {
    const lista = await jogos.findAll();
    res.render("md", {lista : lista});
  });


  //Aqui esta recebendo os cadastros e mandando pro banco de dados
  app.post("/new", (req, res) => {
    const {
      nome,
      tipo,
      imagem,
      descricao
    } = req.body;
    jogos.create({
      nome:nome,
      tipo:tipo,
      descricao:descricao,
      imagem:imagem
    })
    res.redirect("/")
  });


app.listen(port, () => console.log(`Running in http://localhost:${port}`));
