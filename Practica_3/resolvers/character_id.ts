import { Request, Response } from "npm:express@4.18.2";
import { getId_character } from "../promises/getId_character.ts";


import CharacterModel from "../db/character.ts"

export const character_id = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      
      const alreadyExists = await CharacterModel.findOne({id}).exec();
      if(alreadyExists){
        const formato_fecha = alreadyExists.created.substring(8,10)+":"+alreadyExists.created.substring(5,7)+":"+alreadyExists.created.substring(0,4);
        const mostrar_caracter = {"ID ->":alreadyExists.id,
        "Name ->":alreadyExists.name,
        "Status ->":alreadyExists.status,
        "Species ->":alreadyExists.species,
        "Gender ->":alreadyExists.gender,
        "Origin ->":alreadyExists.origin,
        "Location ->":alreadyExists.location,
        "Created ->":formato_fecha};
        res.status(200).send(mostrar_caracter);

      }else{
        const result = await getId_character(id);//resultado de pedir a la api
        const newCharacter = new CharacterModel(result);//meter a la db con los valores de la api
        await newCharacter.save();//guardamos los valores en la db
        const formato_fecha = result.created.substring(8,10)+":"+result.created.substring(5,7)+":"+result.created.substring(0,4);
        const mostrar_caracter = {"ID ->":result.id,
        "Name ->":result.name,
        "Status ->":result.status,
        "Species ->":result.species,
        "Gender ->":result.gender,
        "Origin ->":result.origin,
        "Location ->":result.location,
        "Created ->":formato_fecha};
        res.status(200).send(mostrar_caracter);
      }
      //Busca si esta en la base de datos si esta lo muestra si no esta lo pide y lo guarda
      
    } catch (e) {
      res.status(500).send(e.message);
    }
  }