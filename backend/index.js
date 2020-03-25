const express = require("express");

const app = express();

// Antes das requisições converte para json
app.use(express.json());

/**
 * Rotas / Recursos
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/lsitar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query params: Pramâmetro nomeados enviados na rota após "?" ( Filtros, paginação)
 * Route params: Pramâmetro utilizado para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar e alterar
 */

// Request Body
app.post("/user", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.send({
    evento: "Semana OmniStack",
    aluno: "Nurielly Caroline Brizola"
  });
});

// Route params
// app.get("/user/:id", (request, response) => {
//   const params = request.params;
//   console.log(params);
//   return response.send({
//     evento: "Semana OmniStack",
//     aluno: "Nurielly Caroline Brizola"
//   });
// });

// Query params
//  app.get("/user", (request, response) => {
//    const params = request.query;
//    console.log(params);
//    return response.send({
//      evento: "Semana OmniStack",
//      aluno: "Nurielly Caroline Brizola"
//    });
//  });

// Sem parametros
// app.get("/", (request, response) => {
//   return response.send({
//     evento: "Semana OmniStack",
//     aluno: "Nurielly Caroline Brizola"
//   });
// });

app.listen(3333);
