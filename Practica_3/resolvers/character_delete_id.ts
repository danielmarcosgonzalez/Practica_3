import { Request, Response } from "npm:express@4.18.2";
import  CharacterModel  from "../db/character.ts";

export const deleteCharacter = async(req: Request,res:Response)=>{
    try {
        const {id}  = req.params;
        const character = await CharacterModel.findOneAndDelete({id}).exec();
        if (!character) {
          res.status(404).send("Character not found");
          return;
        }
        res.status(200).send("Character deleted");
      } catch (error) {
        res.status(404).send(error.message);
        return;
      }
};

