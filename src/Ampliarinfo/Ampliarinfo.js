import { useLocation } from "react-router-dom"
export function Ampliarinfo(){

    let datosrecibidos=useLocation()


    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <h2>{producto.nombre}</h2>
        </>
    )
}