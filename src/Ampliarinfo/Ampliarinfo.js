import './Ampliarinfo.css'
import { Footer } from "../shared/Footer/Footer"
import { useLocation } from "react-router-dom"
export function Ampliarinfo(){

    let datosrecibidos=useLocation()


    let producto=datosrecibidos.state.productoSeleccionado
    
    console.log(producto)

    return(
        <>
            <div className="container">

                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <h1 className="mt-3 display-2">{producto.precio}<span className='descuento'>20% dto.</span></h1>
                        <br/>
                        <span class="badge text-light bg-info">Descuento del día</span>
                        <p>Hasta 48 cuotas</p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/visa.png?alt=media&token=a2dfddd6-b808-4c6f-bdb9-b7a5ea93b16a' alt='' className='img-fluid'></img>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/american-express%20(1).png?alt=media&token=262ad728-54a5-42ed-9113-caf643787f8a' alt='' className='img-fluid ms-2'></img>

                        <br/>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/delivery.png?alt=media&token=36c38ca2-4079-444b-9ead-b27cabf8299e' alt='' className='img-fluid mt-5 fs-1'></img>
                        <p className='fw-bold'> Envio gratis a nivel nacional </p>
                        <p>conoce los tiempos y las formas de envío</p>
                        <i class="bi bi-arrow-clockwise mt-5 fs-1 text-success"></i>
                        <p className='fw-bold text-success'> Devolución gratis </p>
                        <p>30 días para reembolso</p>
                        <br/>
                        <h1 className='fw-bold fs-5'>Descripción</h1>
                        <p className='mt-3 display-2 fs-5'>{producto.descripcion}</p>


                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}