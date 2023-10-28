import { Request, Response } from "npm:express@4.18.2";
import LocationModel from "../db/location.ts"

export const location_filter_dimension = async (req: Request, res: Response) => {
    try {
      const dimension = req.params.dimension;
      
      const alreadyExists = await LocationModel.findOne({dimension}).exec();
      if(alreadyExists){
        res.status(200).send(alreadyExists);

      }else{
        res.status(404).send("Not found")
      }
      
    } catch (e) {
      res.status(500).send(e.message);
    }
  }