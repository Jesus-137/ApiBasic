import express from "express";

import { loginController, createController } from "./dependencies";

export const adminRouter = express.Router();

adminRouter.post(
  "/login/",
  loginController.run.bind(loginController)
);
adminRouter.post(
  "/crear",
  createController.run.bind(createController)
);