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
        headers:{Authorization:"Bearer BQBftkOQPCpoDJRVXukD65x-GolhOrXCNUMcr1-VOyjO0qTvuVcwz9Y4MHa0X1-kKtOeLbaELna6LEdvoFUg7Qrfdy4Z-4LAMV0pbBhmYiIP_dnSDDJGf3hRPimnhsnpmt9G5rA_LgX37snD09IBjjURo4SfATzEsoDRa6s"}
    }

    //3.NOS VAMOS PARA EL RESTAURANTE
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,REQUEST)
    let canciones=await respuesta.json()

    return(canciones)
}