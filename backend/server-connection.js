const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "autorack.proxy.rlwy.net",
  user: "root",
  password: "HARbBrOOhYxfekCqzjGrQVACWeRyqXPT",
  database: "SchedulingApp",
  port: "26437",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados Mysql:", err);
    return;
  }
  console.log("Conexão estabelecida com o banco de dados Mysql");
});

app.get("/api/users", (request, response) => {
  connection.query("SELECT * FROM Users", (err, results) => {
    if (err) {
      console.error("Erro ao executar a query:", err);
      res.status(500).json({ error: "Erro ao buscar dados." });
      return;
    }
    res.re(results);
  });
});
