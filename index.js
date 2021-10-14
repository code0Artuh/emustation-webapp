require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;


let message = "";

//importando os dois js que estão interligando com o banco de dados
const database = require("./model/database/index.js");
require("./model/index.js").jogos;


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", {message});
});

app.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  const jogo = await jogos.findAll({ from: { jogos }, where: { id: id } });
  res.render("details", { jogo });
});

app.get("/snes", async (req, res) => {
  const lista = await jogos.findAll({
    from: { jogos },
    where: { cons: "Snes" },
  });
  res.render("snes", { lista });
});

app.get("/md", async (req, res) => {
  const lista = await jogos.findAll({ from: { jogos }, where: { cons: "Md" } });
  res.render("md", { lista });
});

app.get("/editar/:id", async (req, res) => {
  const id = req.params.id;
  const jogo = await jogos.findAll({ from: { jogos }, where: { id: id } });
  if (!jogo) {
    res.render("editar", { mensagem: "jogo não encontrado!" });
  }
  res.render("editar", { jogo });
});

app.post("/editar/:id", async (req, res) => {
  const id = req.params.id;
  const jogo = await jogos.findAll({ from: { jogos }, where: { id: id } });
  const { nome, descricao, imagem } = req.body;

  jogos.update({
  nome: nome,
  descricao: descricao,
  imagem: imagem},{where:{id: id}});

  message = "seu jogo foi editado com sucesso"

  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const lista = await jogos.findAll({ from: { jogos }, where: { id: id } });
  if (!lista) {
    res.render("delete", { mensagem: "jogo não encontrado!" });
  }
  res.render("delete", { lista });
});

app.post("/delete/:id", async (req, res) => {
  const jogo = await jogos.findByPk(req.params.id);

  await jogo.destroy();
  mensagem = `O ${jogo.nome} foi deletado com sucesso!`

  res.redirect("/");
});

//Aqui esta recebendo os cadastros e mandando pro banco de dados
app.post("/new", (req, res) => {
  const { nome, tipo, imagem, descricao, cons } = req.body;
  if (!nome) {
    res.render("details", {
      mensagem: "Nome é obrigatório",
    });
  }
  if (!imagem) {
    res.render("details", {
      mensagem: "Imagem é obrigatório",
    });
  }
  if (!tipo) {
    res.render("details", {
      mensagem: "Tipo é obrigatório",
    });
  }
  if (!descricao) {
    res.render("details", {
      mensagem: "Descrição é obrigatório",
    });
  }
  if (!cons) {
    res.render("details", {
      mensagem: "Snes ou Md é obrigatório",
    });
  }
  try {
    jogos.create({
      nome: nome,
      tipo: tipo,
      descricao: descricao,
      imagem: imagem,
      cons: cons,
    });
    message = "Jogo Cadastrado com sucesso!"
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("details", {
      mensagem: "Ocorreu um erro ao cadastrar o jogo!",
    });
  }
});

app.listen(port, () => console.log(`Running in http://localhost:${port}`));