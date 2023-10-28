import { Request, Response } from "npm:express@4.18.2";
import CharacterModel from "../db/character.ts"

export const character_filter_status = async (req: Request, res: Response) => {
    try {
      const status = req.params.status;
      
      const alreadyExists = await CharacterModel.findOne({status}).exec();
      if(alreadyExists){
        res.status(200).send(alreadyExists);

      }else{
        res.status(404).send("Not found")
      }
      
    } catch (e) {
      res.status(500).send(e.message);
    }
  }