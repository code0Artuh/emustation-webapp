const  express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const database = require('./db');
const jogos = require('./jogos');

(async () => {
    await database.sync();
})();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const Game = jogos.create({
    Nome: "The Legend of Zelda",
    Ano: "1997",
    Link:"https://myemulator.online/emu?game=MzM2",
    Img: "/img/zelda.png"
});


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
    res.render("snes",  {Game});
  }); 

  app.get("/md", (req, res) => {
    res.render("md");
  });


app.listen(port, () => console.log(`Running in http://localhost:${port}`));
