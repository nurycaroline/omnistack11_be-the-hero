const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.send({
    evento: "Semana OmniStack",
    aluno: "Nurielly Caroline Brizola"
  });
});

app.listen(3333);
