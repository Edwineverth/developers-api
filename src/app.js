import express, { json } from "express";
import morgan from "morgan";
import developerRouters from "./routes/developer";
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

export default app;
