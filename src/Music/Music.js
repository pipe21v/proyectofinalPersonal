import { servicioCancionesTop } from "../services/servicioCanciones"

export function Music (){

    servicioCancionesTop()

    return(
        <>
            <h1>Music cargando</h1>
        </>
    )}