const  express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());





app.listen(port, () => console.log(`Running in http://localhost:${port}`));


  app.get("/", (req, res) => {
    res.render("index")
  });

  app.get("/details", (req, res) => {
    res.render("detalhes");
  });

  app.get("/cadastro", (req, res) => {
    res.render("cadastro");
  });

  app.get("/snes", (req, res) => {
    res.render("snes");
  }); 

  app.get("/md", (req, res) => {
    res.render("md");
  });