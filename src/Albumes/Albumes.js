
import { servicioAlbumesTop } from "../services/servicioAlbumes"
import { Footer } from "../shared/Footer/Footer"
import { useState,useEffect } from "react"

export function Albumes (){
    //usando el hook usestate para almacenar la respuesta del api de forma global
    const[albumes,setAlbumes]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //usando el hook useeffect para limitar el consumo del api a una sola vez
    useEffect(function(){

        servicioAlbumesTop().then(function(respuesta){
            setAlbumes(respuesta)
            setEstadoCarga(false)
            })
    },[])

    // render del componente:
    if(estadoCarga==true){

        return(
            <>
                <h2>Estamos cargando los álbumes</h2>
            </>
        )

    }else{

        return(
            <>
                <h1 className="text-center titulo p-5">Álbumes de la banda</h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-5 g-5">

                        {
                        albumes.tracks.map(function(album,id){
                            return(
                                <div key={id}>
                                    <div className="col">
                                        <div className="card h-100 shadow">
                                                <img src={albumes.album.images[0].url} alt="foto" className="h-100 img-fluid w-100"></img>
                                                <h4 className="text-center titulo">{album.name}</h4>
                                                
                                                
                                                
                                        </div>
                                    </div>
                                
                                </div>
                            
                                )
                            })
                         }
                    </div>

                </div>
                <Footer/>
                
            </>
        )

    }

}