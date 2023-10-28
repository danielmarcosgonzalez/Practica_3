import { Character } from "../type.ts";

export const getId_character = async (
    id:string
  ): Promise<Character> => {
    
    const base_url = "https://rickandmortyapi.com/api/character";
    const url = `${base_url}/${id}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Cannot fetch location");
    }
  
    const data = await response.json();
  
    return {
      id:data.id,
      name:data.name,
      status:data.status,
      species:data.species,
      type:data.type,
      gender:data.gender,
      origin:data.origin,
      location:data.location,
      image:data.image,
      episode:data.episode,
      url:data.url,
      created:data.created
    };
  };