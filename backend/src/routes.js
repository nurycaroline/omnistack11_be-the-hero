const express = require("express");

const routes = express.Router();

routes.post("/user", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.send({
    evento: "Semana OmniStack",
    aluno: "Nurielly Caroline Brizola"
  });
});

module.exports = routes;
