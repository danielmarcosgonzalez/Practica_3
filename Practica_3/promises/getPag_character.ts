import { ch } from "../type.ts";

export const getPag_character = async (
    pagina:string
  ): Promise<ch> => {
    
    const base_url = "https://rickandmortyapi.com/api/character";
    const url = `${base_url}/?page=${pagina}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Cannot fetch location");
    }
  
    const data = await response.json();
  
    return {
      info:data.info,
      results:data.results
    };
  };