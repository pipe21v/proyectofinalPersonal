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
        headers:{Authorization:"Bearer BQCnDHXubgAVWbU4uaCYSz07Y6P8R6DQ1OyeyzP81JfJMqNMzApCZkX0doymw95rsM6TwKOtBrq2zicZEx8Ce0UM7IUsvulVS_8QgjJ-WazmBrQUmah3zpJHldARrNIk75lgcdZ6q4LoFSrVUpEgnwIToW7CxAHgmpWiqM0"}
    }

    //3.NOS VAMOS PARA EL RESTAURANTE
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,REQUEST)
    let canciones=await respuesta.json()

    return(canciones)
}