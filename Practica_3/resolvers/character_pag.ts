import { Request, Response } from "npm:express@4.18.2";
import { getPag_character } from "../promises/getPag_character.ts";

export const character_pag = async (req: Request, res: Response) => {
    try {
      const page = req.params.page;
      const pag = await getPag_character(page);
      const names = pag.results.map(elem=> elem.name)
      res.status(200).send(names);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }