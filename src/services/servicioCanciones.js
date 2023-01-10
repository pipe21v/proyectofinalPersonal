// receta para consumir una api con react

export async function servicioCancionesTop(){

    //pasos
    //1. PA ONDE VAS Y A QUE VAS 
    //ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

    //2. QUE OPERACION VAS A HACER EN LA BASE DE DATOS
    // CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    // SE CREA LA CONSTANTE PETICION (REQUEST)
    const REQUEST={
        method:"GET",
        headers:{Authorization:"Bearer BQDc6hs9BEFG05DDHrSHcCwgiyX_MMg9EgWNIgT_DV9ga7sV_d6CS7eHuzKs49lE27HHrGQUXnSPC_-aqJLFqwJsvogZyz9QVHuCGfbMmxDPVyZZkiV3GlcLJ_aEuwIrlqcEbVzoOXejFKpE8V5Jd68bWOaFz73iEPRx0ug"}
    }

    //3.NOS VAMOS PARA EL RESTAURANTE
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,REQUEST)
    let canciones=await respuesta.json()

    console.log(canciones)
}