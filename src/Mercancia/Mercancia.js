import { Footer } from "../shared/Footer/Footer"

export function Mercancia(){

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
            <h1 class="text-center">{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">

                    {
                        productos.map(function(producto){
                            return(
                                <>
                                    <div class="col">
                                        <div class="card h-100 shadow">

                                            <img src={producto.foto} alt="foto" class="h-100 img-fluid w-100"/>
                                            <h4 class="text-center">{producto.nombre}</h4>
                                            <h4 class="text-center">{producto.precio}</h4>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
            <Footer/>
        </>
    )
}