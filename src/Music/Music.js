import './Music.css'
import { servicioCancionesTop } from "../services/servicioCanciones"
import { Footer } from "../shared/Footer/Footer"
import { useState,useEffect } from "react"

export function Music (){
    //usando el hook usestate para almacenar la respuesta del api de forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //usando el hook useeffect para limitar el consumo del api a una sola vez
    useEffect(function(){

        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
            })
    },[])

    // render del componente:
    if(estadoCarga==true){

        return(
            <>
                <h2>Estamos cargando las canciones</h2>
            </>
        )

    }else{

        return(
            <>
                <h1 className="text-center titulo p-5">Canciones de la banda </h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-5 g-5">

                        {
                        canciones.tracks.map(function(cancion,id){
                            return(
                                <div key={id}>
                                    <div className="col my-4">
                                        <div className="card h-100 w-100 shadow">
                                                <img src={cancion.album.images[0].url} alt="foto" className="h-100 img-fluid w-100"></img>
                                                <h6 className="text-center titulo">{cancion.name}</h6>
                                                <audio controls src={cancion.preview_url} className="w-100 p-2"></audio>
                                                <h6 className="text-center text-info">Popularidad: {cancion.popularity}</h6>
                                                
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