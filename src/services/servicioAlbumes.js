export async function servicioAlbumesTop(){

    const URL="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums?include_groups=single&market=US&limit=10&offset=5"

    const REQUEST={
        method:"GET",
        headers:{Authorization:"Bearer BQAOgGXnGi4EHrm8SbFo_ezPrKfUaMxCWN1XF1wcx7Udpcf0-1BWVX2e3TLN26PhnR2nHI_0OEkgg-NRUnvk9Tgp3IC07a-i_ODvtC2tb4Lbp50hndjE496nWVEg6QmxIjmwTaGojefzrWT8gn4yxEDiT-c8Hq7XoIpl1Qg"}
    }

    
    let respuesta=await fetch(URL,REQUEST)
    let albumes=await respuesta.json()

    return(albumes)
}
