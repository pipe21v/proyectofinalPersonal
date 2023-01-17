import './Mercancia.css'
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
            precio: " $ 60.000",
            descripcion: "DISEÑO DE LA GIRA MUNDIAL DE LA MÚSICA DE LAS ESFERAS IMPRESO EN UNA CAMISETA NEGRA UNISEX CON TINTAS SOSTENIBLES, 100% ALGODÓN."
        },
        {
            nombre:"Brazalete Music of The Spheres",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto2.webp?alt=media&token=07d96c75-15a4-48f9-b564-d1ce5d13e940",
            precio:"$ 30.000",
            descripcion: "MÚSICA DE LAS ESFERAS - PULSERA TEJIDA, 100% HILOS DE ALGODÓN. CERTIFICADO FSC, EMBALAJE DE TARJETA RECICLADA"
        },
        {
            nombre:"Camiseta Music of the Spheres Purple Tour",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto3.webp?alt=media&token=8d12f5bb-3ed6-450e-a938-cbc4a3ff0634",
            precio:" $ 60.000",
            descripcion: "¡EXCLUSIVO EN LÍNEA! DISEÑO DE LA GIRA MUNDIAL DE LA MÚSICA DE LAS ESFERAS IMPRESO EN UNA CAMISETA UNISEX MORADA CON TINTAS SOSTENIBLES, 100% ALGODÓN."
        },
        {
            nombre:"Buso Holiday Crewneck",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto4.webp?alt=media&token=eb19f716-d802-4e74-a33a-e966a529db7b",
            precio:" $ 120.000",
            descripcion: "DISEÑO DE SUÉTER NAVIDEÑO ESTAMPADO EN UNA SUDADERA UNISEX DE CUELLO REDONDO 100% ALGODÓN ORGÁNICO."
        },
        {
            nombre:"Medias Mylo Xyloto",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto5.webp?alt=media&token=aee1855a-d182-47f2-aad6-7212cad5f288",
            precio:" $ 25.000",
            descripcion: "UN PAR DE CALCETINES DE DISEÑO MYLO XYLOTO 70 % POLIÉSTER RECICLADO, 15 % NAILON RECICLADO Y 15 % ELÁSTICO HECHO EN LOS EE. UU"
        },
        {
            nombre:"Gorra Original Coldplay",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/producto6.webp?alt=media&token=d2c1db5c-39e7-426c-b216-0d8b4bb08126",
            precio:" $ 70.000",
            descripcion: "GORRA NEGRA BORDADA CON LOGO DE COLDPLAY Y LUNA. LA GORRA ES 100% ALGODÓN, AJUSTABLE, TALLA ÚNICA. "
        }
    ]


    return(
        <>
            <h1 className="text-center titulo p-5">{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">

                    {
                        productos.map(function(producto,id){
                            return(
                                <div className='container' key={id}>
                                    <div className="col-12 my-4">
                                        <div className="card h-100 shadow">

                                            

                                            <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"/>
                                            <h5 className="text-center titulo">{producto.nombre}</h5>
                                            <h4 className="text-center">{producto.precio}</h4>
                    


                                            <button className="btn btn-info mx-3 my-3 text-light" onClick={
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