import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"

export function Mercancia(){

    //activamos la navegación entre componenetes cuando se dé un evento
    let navegacion=useNavigate()
    // qué hago cuando se dé el evento...
    function detectarEvento(productoSeleccionado){
        
        navegacion('/tienda',{
            state:{productoSeleccionado}
        })
    }

    let titulo="Coldplay Store"

    let productos=[
        {
            nombre:"Camiseta Music of the Spheres",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto1.webp?alt=media&token=89f9bfa4-d050-4fea-b50e-b31494ab6d9b",
            precio: " $ 60.000"
        },
        {
            nombre:"Brazalete Music of The Spheres",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto2.webp?alt=media&token=07d96c75-15a4-48f9-b564-d1ce5d13e940",
            precio:"$ 30.000"
        },
        {
            nombre:"Camiseta Music of the Spheres Purple Tour",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto3.webp?alt=media&token=8d12f5bb-3ed6-450e-a938-cbc4a3ff0634",
            precio:" $ 60.000"
        },
        {
            nombre:"Buso Holiday Crewneck",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto4.webp?alt=media&token=eb19f716-d802-4e74-a33a-e966a529db7b",
            precio:" $ 120.000"
        },
        {
            nombre:"Medias Mylo Xyloto",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto5.webp?alt=media&token=aee1855a-d182-47f2-aad6-7212cad5f288",
            precio:" $ 25.000"
        },
        {
            nombre:"Gorra Original Coldplay",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto6.webp?alt=media&token=d2c1db5c-39e7-426c-b216-0d8b4bb08126",
            precio:" $ 70.000"
        }
    ]


    return(
        <>
            <h1 className="text-center">{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">

                    {
                        productos.map(function(producto,id){
                            return(
                                <div key={id}>
                                    <div className="col">
                                        <div className="card h-100 shadow">

                                            

                                            <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"/>
                                            <h4 className="text-center">{producto.nombre}</h4>
                                            <h4 className="text-center">{producto.precio}</h4>


                                            <button className="btn btn-primary mx-3 my-3" onClick={
                                                function(){
                                                    detectarEvento(producto)
                                                }
                                            }>Ampliar</button>
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