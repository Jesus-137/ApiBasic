import { Modelo } from "./Modelo";

export interface Repository {
  create(
    nombre: string,
    correo: string,
    password: string,
    telefono: string,
  ): Promise<Modelo | null>;
  login(
    correo: string,
    password: string
  ): Promise <Modelo | null>;
}