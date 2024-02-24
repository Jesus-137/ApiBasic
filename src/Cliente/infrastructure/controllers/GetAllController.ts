import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController {
  constructor(readonly getAllUseCase: GetAllUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const datas = await this.getAllUseCase.run();
      if (datas)
        res.status(200).send(datas.map((data: any) => {
            return {
              id: data.id,
              nombre: data.nombre,
              correo: data.correo,
              password: data.password,
              telefono: data.telefono
            };
          }),
        );
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
