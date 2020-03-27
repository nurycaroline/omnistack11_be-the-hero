const express = require("express");

const routes = express.Router();

const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);

module.exports = routes;
