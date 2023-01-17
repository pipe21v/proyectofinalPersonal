import { generarToken } from "./servicioToken"

export async function servicioAlbumesTop(){

    let token=await generarToken()

    const URL="https://api.spotify.com/v1/albums/4gzpq5DPGxSnKTe4SA8HAU/tracks?market=US&limit=10&offset=5"

    const REQUEST={
        method:"GET",
        headers:{Authorization:token}
    }

    
    let respuesta=await fetch(URL,REQUEST)
    let albumes=await respuesta.json()

    return(albumes)
}
