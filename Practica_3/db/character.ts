import mongoose from "npm:mongoose@7.6.3";
import { Character } from "../type.ts";

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    id:{type:Number, required: true},
    name: {type:String, required: true},
    status: {type:String},
    species: {type:String},
    type: {type:String},
    gender: {type:String},
    origin: {name:{type:String}, url:{type:String}},
    location: {name:{type:String}, url:{type:String}},
    image: {type:String},
    episode: {type:Array<String>},
    url: {type:String},
    created: {type:String}
});


export type CharacterModelType = mongoose.Document & Omit<Character, "id">;
export default mongoose.model<CharacterModelType>("Character",characterSchema);