 type pag ={
    count: number,
    pages: number,
    next: string,
    prev: string
}

 export type Character={
    id: number,
    name: string,
    status:string,
    species:string,
    type:string,
    gender:string,
    origin:origi,
    location:locati,
    image:string,
    episode:Array<string>,
    url:string,
    created:string
}

type origi={
    name: string,
    url: string
}

type locati={
    name :string,
    url: string
}


export type ch ={
    info: pag,
    results: Array<Character>
}

export type Location={
    id: number,
    name:string,
    type:string,
    dimension:string,
    residents:Array<string>,
    url:string,
    created:string
}
export type pag_location ={
    info: pag,
    results: Array<Location>
}

