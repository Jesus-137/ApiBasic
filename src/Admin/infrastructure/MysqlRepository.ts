import { query } from "../../database/mysql";
import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class MysqlDesviacionRepository implements Repository {
  async login(nombre: string, password: string): Promise<Modelo | null> {
    const sql = "SELECT * FROM admins WHERE nombre=? and password=?";
    const params: any[]=[nombre, password];
    try {
      const result: any= await query(sql, params);
      const user = result[0][0];
      console.log(user)
      return user;
    } catch (error) {
      return null;
    }
  }
  async create(
    nombre: string,
    correo: string,
    password: string,
    telefono: string
  ): Promise<Modelo | null> {
    const sql = "INSERT INTO admins (nombre, correo, password, telefono) VALUES (?, ?, ?, ?)";
    const params: any[] = [nombre, correo, password, telefono];
    try {
      const [result]: any = await query(sql, params);
      return new Modelo(result.insertId, nombre, correo, password, telefono);
    } catch (error) {
      return null;
    }
  }
}
