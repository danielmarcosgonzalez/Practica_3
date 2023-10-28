import { Request, Response } from "npm:express@4.18.2";
import { getId_location } from "../promises/getId_location.ts";

import  LocationModel from "../db/location.ts"

export const location_id = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      
      const alreadyExists = await LocationModel.findOne({id}).exec();
      if(alreadyExists){
        const formato_fecha = alreadyExists.created.substring(8,10)+":"+alreadyExists.created.substring(5,7)+":"+alreadyExists.created.substring(0,4);
        const mostrar_caracter = {"ID ->":alreadyExists.id,
        "Name ->":alreadyExists.name,
        "Type ->":alreadyExists.type,
        "Dimension ->":alreadyExists.dimension,
        "Created ->":formato_fecha};
        res.status(200).send(mostrar_caracter);
      }else{
        const result = await getId_location(id);//resultado de pedir a la api

        const newLocation = new LocationModel(result);//mandamos los valores de resul a la db
        await newLocation.save();//guardamos en la db

        const formato_fecha = result.created.substring(8,10)+":"+result.created.substring(5,7)+":"+result.created.substring(0,4);
        const mostrar_caracter = {"ID ->":result.id,
        "Name ->":result.name,
        "Type ->":result.type,
        "Dimension ->":result.dimension,
        "Created ->":formato_fecha};
        res.status(200).send(mostrar_caracter);
      }
      //Busca si esta en la base de datos si esta lo muestra si no esta lo pide y lo guarda
      
    } catch (e) {
      res.status(500).send(e.message);
    }
  }