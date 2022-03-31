const express = require("express");
const app = express();
const path = require("path")
const port = 3000;
const routes = require("./routes/routes")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
