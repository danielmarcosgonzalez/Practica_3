import { Location } from "../type.ts";

export const getId_location = async (
    id:string
  ): Promise<Location> => {
    
    const base_url = "https://rickandmortyapi.com/api/location";
    const url = `${base_url}/${id}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Cannot fetch location");
    }
  
    const data = await response.json();
  
    return {
      id:data.id,
      name:data.name,
      type:data.type,
      dimension:data.dimension,
      residents:data.residents,
      url:data.url,
      created:data.created
    };
  };