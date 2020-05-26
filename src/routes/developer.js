import { Router } from "express";

import {
  getDevelopers,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper,
  getDeveloper,
} from "../controllers/developers";

import validationHandler from "../middleware/validationHandler";

import {
  createDeveloperSchema,
  updateDeveloperSchema,
  developerIdSchema,
} from "../schemas/developer.js";
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get("/", getDevelopers);
routes.get(
  "/:id",
  validationHandler({ id: developerIdSchema }, "params"),
  getDeveloper
);

routes.post("/", validationHandler(createDeveloperSchema), createDeveloper);
routes.put(
  "/:id",
  validationHandler({ id: developerIdSchema }, "params"),
  validationHandler(updateDeveloperSchema),
  updateDeveloper
);
routes.delete(
  "/:id",
  validationHandler({ id: developerIdSchema }, "params"),
  deleteDeveloper
);

module.exports = routes;
