import mongoose from "npm:mongoose@7.6.3";
import { Location} from "../type.ts";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    id: {type:Number, required: true},
    name: {type:String, required: true},
    type: {type:String},
    dimension: {type:String},
    url: {type:String},
    created: {type:String}
});

export type LocationModelType = mongoose.Document & Omit<Location, "id">;
export default mongoose.model<LocationModelType>("Location",locationSchema);
