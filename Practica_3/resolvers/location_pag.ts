import { Request, Response } from "npm:express@4.18.2";
import { getPag_location } from "../promises/getPag_location.ts";

export const location_pag = async (req: Request, res: Response) => {
    try {
      const page = req.params.page;
      const pag = await getPag_location(page);
      const names = pag.results.map(elem=> elem.location.name)
      res.status(200).send(names);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }