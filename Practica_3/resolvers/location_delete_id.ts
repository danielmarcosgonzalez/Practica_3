import { Request, Response } from "npm:express@4.18.2";
import  LocationModel  from "../db/location.ts";

export const deleteLocation = async(req: Request,res:Response)=>{
    try {
        const {id}  = req.params;
        const location = await LocationModel.findOneAndDelete({id}).exec();
        if (!location) {
          res.status(404).send("Location not found");
          return;
        }
        res.status(200).send("Location deleted");
      } catch (error) {
        res.status(404).send(error.message);
        return;
      }
};

