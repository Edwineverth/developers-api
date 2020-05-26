import express, { json } from "express";
import morgan from "morgan";
import developerRouters from "./routes/developer";
import {
  logErrors,
  errorHandler,
  wrapErrors,
} from "./middleware/error-Handlers";
import notFoundHandler from "./middleware/notFoundHandler";
//Importing routes
// import projectRoutes from "./routes/projects";

const app = express();

//middleware
//morgan -. show by console that is coming
app.use(morgan("dev"));
//json -> understand files in json format
app.use(json());

//routes
app.use("/api/developers", developerRouters);
// app.use("/api/tasks", taskRoutes);

//Catch 404
app.use(notFoundHandler);

// Manejadores de errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

export default app;
