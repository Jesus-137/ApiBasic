import { MysqlDesviacionRepository } from "./MysqlRepository";
import { LoginUseCase } from "../application/LoginUseCase";
import { CreateUseCase } from "../application/CreateUseCase";
import { LoginController } from "./controllers/LoginController";
import { CreateController } from "./controllers/CreateController";

export const mysqlRepository = new MysqlDesviacionRepository();
export const createUseCase = new CreateUseCase(
  mysqlRepository
);
export const loginUseCase = new LoginUseCase(
  mysqlRepository
);
export const loginController = new LoginController(
  loginUseCase
);
export const createController = new CreateController(
  createUseCase
);