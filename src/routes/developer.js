import { Router } from "express";

import {
  getDevelopers,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper,
} from "../controllers/developers";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get("/", getDevelopers);
routes.post("/", createDeveloper);
routes.put("/:id", updateDeveloper);
routes.delete("/:id", deleteDeveloper);

module.exports = routes;
