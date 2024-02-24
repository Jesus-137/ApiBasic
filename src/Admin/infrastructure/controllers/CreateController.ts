import { Request, Response } from "express";
import { CreateUseCase } from "../../application/CreateUseCase";

export class CreateController {
  constructor (
    readonly createUseCase: CreateUseCase
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      console.log(data.nombre)
      if (/\d/.test(data.nombre)){
        res.status(201).send({
          status: "El nombre no puede tener numeros",
        });
      }else if (data.password.length<=8){
          res.status(201).send({
            status: "La contraseña tiene que tener mas de 8 digitos",
          });
        }else if (data.telefono.length!=10){
          res.status(201).send({
            status: "El telefono tiene que tener 10 número",
          });
        }else if (!/^.+@.+\.(com|mx)$/.test(data.correo)){
          res.status(201).send({
            status: "El correo tiene que tener un @ y terminar en .com o .mx",
          });
        }else{
          const cliente = await this.createUseCase.run(
            data.nombre,
            data.correo,
            data.password,
            data.telefono
          );
          if (cliente){
            //Code HTTP : 201 -> Creado
            res.status(201).send({
              status: "success",
              data: {
                id: cliente.id,
                nombre: cliente.nombre,
                correo: cliente.correo,
                password: cliente.password,
                telefono: cliente.telefono
              },
            });
            console.log('Registro exitoso')
          }
          else
            res.status(204).send({
              status: "error",
              data: "NO fue posible agregar el registro",
            });
      }
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
