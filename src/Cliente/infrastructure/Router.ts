import express from "express";

import { loginController, getAllController } from "./dependencies";

export const clientRouter = express.Router();

clientRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
clientRouter.post(
  "/login/",
  loginController.run.bind(loginController)
);
