import './Integrantes.css'
import { Footer } from "../shared/Footer/Footer"

export function Integrantes(){
    
    let titulo="Integrantes"

    let personas=[
        {
            nombre:"Chris Martin",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/ChrisMartin.webp?alt=media&token=46efdf47-5d8f-40ec-b0b7-65ed9f495152",
            descripcion:" (Exeter, Devon; 2 de marzo de 1977), Es un cantautor, músico, compositor, productor discográfico, activista social y filántropo británico. Es reconocido por ser fundador y vocalista principal de la banda británica Coldplay. Es conocido además por su activismo en campañas a favor del comercio justo y por estar en contra del hambre en el mundo. Alcanzó la fama mundial con el lanzamiento del sencillo Yellow en el año 2000,una canción que también le valió a la banda su primera nominación al Premio Grammy por Mejor Canción de Rock."
        },
        {
            nombre:"Guy Berriman",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/GuyBerriman.jpg?alt=media&token=96f8e2f2-7d16-41f6-96b1-be1b1ee8603a",
            descripcion:" (Kirkcaldy, Escocia, 15 de abril de 1978), Es el bajista de la banda Coldplay. Es un gran fan del Capitán América y de Space Invaders. Es ávido seguidor del Raith Rovers Football Club, de su ciudad natal Kirkcaldy. Tiene interés por la fotografía, la moda, los dispositivos electrónicos, instrumentos musicales de época, vieja tecnología de estudio y de correr. Participó por primera vez en el maratón de Londres del año 2008, que completó en menos de cuatro horas."
        },
        {
            nombre:"Jon Buckland",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/jon-buckland.webp?alt=media&token=e2860353-294d-4e9b-95f7-d4fa14bf02c9",
            descripcion:"(Islington, Londres, Inglaterra, 15 de septiembre de 1977), conocido también como Jonny Buckland, es miembro cofundador y el guitarrista principal de la banda británica Coldplay.Buckland es fanático del equipo de fútbol Tottenham Hotspur. Era vegetariano desde hace algún tiempo, pero finalmente se rindió después de haber pasado un tiempo en Japón y, después de no poder comunicar que no comía carne, se sirvió carne de vacuno, posiblemente de kobe y vio que le gustó"
        },
        {
            nombre:"Will Champion",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/willChampion.jpg?alt=media&token=cb2c4608-079c-46cc-9fab-8ccd96963208",
            descripcion:"(Southampton, Hampshire, 24 de julio de 1978) Es un músico y compositor británico. Es baterista y voz secundaria de la banda Coldplay. Se casó luego de haber estado comprometido en el año 2003 con Marianne Dark, una profesora con la cual tiene 3 hijos: Ava Champion, nacida el 28 de abril de 2006 y los gemelos fraternos Juno, una niña y Rex, un varón, nacidos el 7 de mayo de 2008."
        }
    ]

    return(
        
        <>
            <h1 className="text-center titulo p-5">{titulo}</h1>
                 <div className="container">
                     <div className="row row-cols-1 row-cols-md-1 g-5">

                    {
                        personas.map(function(persona){
                            return(
                            <>
                                <div className="container">
                                    <div className="row my-5">
                                        <div className="col-12 col-md-6">

                                            <img src={persona.foto} alt="foto" className="h-100 img-fluid w-100"/>

                                        </div>
                                        <div className="col-12 col-md-6 border p-3 descripcion">
                                            <h2 className="text-center fs-1 p-5">{persona.nombre}</h2>
                                            <h5 className="text-center p-5">{persona.descripcion}</h5>
                                        </div>
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