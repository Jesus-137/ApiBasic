import { query } from "../../database/mysql";
import { Modelo } from "../domain/Modelo";
import { Repository } from "../domain/Repository";

export class MysqlRepository implements Repository {
  async login(correo: string, password: string): Promise<Modelo | null> {
    const sql = "SELECT * FROM clientes WHERE correo=? and password=?";
    const params: any[]=[correo, password];
    try {
      const result: any= await query(sql, params);
      const user = result[0][0];
      console.log(user)
      return user;
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Modelo[] | null> {
    const sql = "SELECT * FROM clientes";
    try {
      const [dat]: any = await query(sql, []);
      const datas = Object.values(JSON.parse(JSON.stringify(dat)));
      return datas.map(
        (data: any) =>
          new Modelo(
            data.id,
            data.nombre,
            data.correo,
            data.password,
            data.telefono
          )
      );
    } catch (error) {
      return null;
    }
  }
}
