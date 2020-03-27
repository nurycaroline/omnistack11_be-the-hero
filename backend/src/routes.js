const express = require("express");

const routes = express.Router();

const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");
const ProfileController = require("./controller/ProfileController");

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
