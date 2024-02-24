import { Modelo } from "./Modelo";

export interface Repository {
  getAll(): Promise<Modelo[] | null>;
  login(
    correo: string,
    password: string
  ): Promise <Modelo | null>;
}
