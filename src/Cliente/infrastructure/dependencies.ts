import { MysqlRepository } from "./MysqlRepository";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { LoginUseCase } from "../application/LoginUseCase";
import { GetAllController } from "./controllers/GetAllController";
import { LoginController } from "./controllers/LoginController";

export const mysqlRepository = new MysqlRepository();
export const getAllUseCase = new GetAllUseCase(
  mysqlRepository
);
export const loginUseCase = new LoginUseCase(
  mysqlRepository
);
export const getAllController = new GetAllController(
  getAllUseCase
);
export const loginController = new LoginController(
  loginUseCase
);