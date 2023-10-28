import { Request, Response } from "npm:express@4.18.2";
import LocationModel from "../db/location.ts"

export const location_filter_type = async (req: Request, res: Response) => {
    try {
      const type = req.params.type;
      
      const alreadyExists = await LocationModel.findOne({type}).exec();
      if(alreadyExists){
        res.status(200).send(alreadyExists);

      }else{
        res.status(404).send("Not found")
      }
      
    } catch (e) {
      res.status(500).send(e.message);
    }
  }