import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { Request, Response } from "npm:express@4.18.2";

import { character_pag } from "./resolvers/character_pag.ts";
import { character_id } from "./resolvers/character_id.ts";
import { location_pag } from "./resolvers/location_pag.ts";
import { location_id } from "./resolvers/location_id.ts";

import { character_filter_status } from "./resolvers/character_filter_status.ts";
import { character_filter_gender } from "./resolvers/character_filter_gender.ts";
import { location_filter_type } from "./resolvers/location_filter_type.ts";
import { location_filter_dimension } from "./resolvers/location_filter_dimension.ts";

import {deleteLocation} from "./resolvers/location_delete_id.ts";
import { deleteCharacter } from "./resolvers/character_delete_id.ts";


const MONGO_URL = "mongodb+srv://danielmarcossagradocorazon:4420@clusterbuneo.ffmiwhm.mongodb.net/practica3?retryWrites=true&w=majority";

try{
await mongoose.connect(MONGO_URL);
console.info("Mongo connected");
const app = express();

app.get("/character/:page",character_pag)

.get("/character/id/:id",character_id)

.get("/location/:page",location_pag)

.get("/location/id/:id",location_id)

.get("/character/filter/status/:status",character_filter_status)

.get("/character/filter/gender/:gender",character_filter_gender)

.get("/location/filter/type/:type",location_filter_type)

.get("/location/filter/dimension/:dimension",location_filter_dimension)

.delete("/location/delete/id/:id",deleteLocation)

.delete("/character/delete/id/:id",deleteCharacter)


app.listen(3000,()=>{
  console.log("Server started on port 3000")
})

}catch(e){
  console.error(e);
}
