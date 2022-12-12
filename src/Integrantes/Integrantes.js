import { Footer } from "../shared/Footer/Footer"

export function Integrantes(){
    
    let titulo="Integrantes"

    let personas=[
        {
            nombre:"Chris Martin",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/ChrisMartin.webp?alt=media&token=46efdf47-5d8f-40ec-b0b7-65ed9f495152",
            descripcion:"as"
        },
        {
            nombre:"Chris Martin",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/ChrisMartin.webp?alt=media&token=46efdf47-5d8f-40ec-b0b7-65ed9f495152",
            descripcion:"sd"
        },
        {
            nombre:"Chris Martin",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/ChrisMartin.webp?alt=media&token=46efdf47-5d8f-40ec-b0b7-65ed9f495152",
            descripcion:"sd"
        },
        {
            nombre:"Chris Martin",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/ChrisMartin.webp?alt=media&token=46efdf47-5d8f-40ec-b0b7-65ed9f495152",
            descripcion:"sd"
        }
    ]

    return(
        
        <>
            <h1 className="text-center">{titulo}</h1>
                 <div className="container">
                     <div className="row row-cols-1 row-cols-md-1 g-5">

                    {
                        personas.map(function(persona){
                            return(
                            <>
                                <div className="col">
                                    <div className="card h-100 shadow">

                                        <img src={persona.foto} alt="foto" className="h-100 img-fluid w-100"/>
                                        <h4 className="text-center">{persona.nombre}</h4>
                                        <h4 className="text-center">{persona.descripcion}</h4>
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