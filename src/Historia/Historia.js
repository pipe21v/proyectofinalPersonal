import './Historia.css'
import { Footer } from "../shared/Footer/Footer"

export function Historia(){
    
    let titulo="Historia"

    let periodos=[
        {
            nombre:"1996-1999: formación y primeros años",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/DtIEX9eVAAEfUyS.jpg?alt=media&token=8b5ae290-438b-4468-9db8-7d9491be75c2",
            descripcion:" Chris Martin y Jonny Buckland se conocieron durante su semana de orientación en la University College London en septiembre de 1996, Planificaron en formar una banda y comenzaron a escribir sus primeras canciones juntos en 1997, donde practicaban todas las noches. Ese mismo año, Martin conoció a Tim Rice-Oxley, quien fue invitado a ser el teclista de Coldplay pero se negó, ya que Keane estaba activo. El encuentro fue el que finalmente se encargó de conformar a ambas bandas como cuartetos. Durante los meses siguientes, Guy Berryman se unió al grupo y su nombre fue cambiado a Big Fat Noises. Will Champion luego completaría la formación en 1998, cuando la banda se rebautizó como Starfish."
        },
        {
            nombre:"2000-2001: Parachutes",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/Coldplay-Barcelona-2000-Press-Image-Photographer_-Tom-Sheehan.jpg?alt=media&token=f2cd7b13-22ad-429d-9ee3-4651a915f023",
            descripcion:"La banda primero planeó grabar su álbum debut, Parachutes, en el lapso de dos semanas. Sin embargo, debido a giras y otras presentaciones en vivo, la grabación se llevó a cabo entre septiembre de 1999 y abril-mayo de 2000. El álbum se grabó en Rockfield Studios, Matrix Studios y Wessex Sound Studios con el productor Ken Nelson, aunque la mayoría de las pistas de Parachutes se grabaron en Parr Street Studios, Liverpool —donde utilizaron tres salas de estudio—. El ingeniero estadounidense Michael Brauer en Nueva York mezcló todas las canciones del álbum. Durante ese tiempo tocaron en el Carling Tour, que mostró actos prometedores"
        },
        {
            nombre:"2002-2004: A Rush of Blood to the Head",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/vivapic.webp?alt=media&token=4eb603a7-bb7c-4f79-a32f-c796e5c1d7da",
            descripcion:"Después del éxito de Parachutes, Coldplay volvió al estudio en septiembre de 2001 para comenzar a trabajar en su segundo álbum, A Rush of Blood to the Head, una vez más con la producción de Ken Nelson. Tuvieron problemas para concentrarse en Londres y decidieron mudarse a Liverpool, donde grabaron algunas de las canciones en Parachutes. Una vez allí, el vocalista Chris Martin dijo que se obsesionaron con la grabación. «In My Place» fue la primera canción grabada para el álbum. La banda lo lanzó como el sencillo principal del álbum porque fue la pista que les hizo querer grabar un segundo álbum."
        },
        {
            nombre:"2005-2007: X&Y",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/1280px-Coldplay_performs_for_Nissan_Live_Sets_2.jpg?alt=media&token=921fbdfa-9c8a-4ca9-830c-607a263a1c27",
            descripcion:"Coldplay pasó la mayor parte de 2004 fuera del centro de atención, tomándose un descanso de las giras y lanzando un video musical satírico de una canción de una banda ficticia titulada The Nappies mientras grababan su tercer álbum, X&Y, lanzado en junio de 2005 en el Reino Unido y Europa. Esta nueva fecha de lanzamiento retrasada había puesto el álbum de nuevo en el próximo año fiscal, y se culpó al lanzamiento tardío por una caída en las acciones de EMI. Se convirtió en el álbum más vendido de 2005 con ventas mundiales de 8,3 millones. El sencillo principal, «Speed of Sound»,hizo su debut en la radio y en la tienda de música en línea el 18 de abril y fue lanzado como CD el 23 de mayo de 2005. X&Y ingresó a las listas de álbumes de 20 países en la posición número uno y fue el tercer álbum más vendido en la historia de las listas del Reino Unido"
        },
        {
            nombre:"2008-2010: Viva la Vida",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/1607593765_282872_1607594560_gigante_normal.jpg?alt=media&token=7b7abf10-223f-4b65-bdc2-2f1efa7fd5be",
            descripcion:"En octubre de 2006, Coldplay comenzó a trabajar en su cuarto álbum de estudio, Viva la Vida or Death and All His Friends, con el productor Brian Eno. Mientras se tomaban un descanso de la grabación, la banda realizó una gira por América Latina a principios de 2007, donde terminaron el Twisted Logic Tour mientras actuaban en Chile, Argentina, Brasil y México. Después de grabar en iglesias y otros lugares de América Latina y España durante su gira, la banda dijo que el álbum probablemente reflejaría la influencia hispana."
        },
        {
            nombre:"2011-2012: Mylo Xyloto",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/Mylo-Xyloto-el-nuevo-%C3%A1lbum-de-Coldplay.jpg?alt=media&token=9ed6cb14-d846-4d00-a120-1b2e1a4430b7",
            descripcion:"La banda terminó de grabar el nuevo álbum a mediados de 2011. Cuando Martin y Champion fueron entrevistados por BBC Radio y se les preguntó sobre los temas líricos del álbum, Martin respondió: «Se trata de amor, adicción, TOC, escape y trabajar para alguien que no te gusta». Cuando se les preguntó si su quinto álbum saldría o no para el verano, Martin y Champion dijeron que había mucho trabajo por hacer antes de lanzarlo. Confirmaron varias apariciones en festivales antes de su fecha de lanzamiento, incluido un lugar principal en el Festival de Glastonbury de 2011, T in the Park,Austin City Limits Music Festival, Rock in Rio, y el festival Lollapalooza."
        },
        {
            nombre:"2013-2014: Ghost Stories",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/coldplay5-e1416499883911.webp?alt=media&token=d865c158-853e-40cc-9312-48db71de64f1",
            descripcion:"En una entrevista con la estación de radio australiana 2Day FM, Chris Martin reveló que el título del próximo álbum de la banda sería «mucho más fácil de pronunciar». Martin desacreditó la especulación de que se estaban tomando un descanso de las giras al decir: «Esta idea de un descanso de tres años solo surgió porque dije en un concierto en Australia que tal vez no volvamos allí durante tres años. Probablemente sea cierto, pero eso es solo cómo funciona una gira mundial. No hay posibilidad de que nos tomemos un descanso de tres años."
        },
        {
            nombre:"2015-2018: A Head Full of Dreams",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/JBLIC37W6FFALMLTHR4DSCPWVA.jpg?alt=media&token=3199e72f-58cb-4573-92b8-76e8af410ffd",
            descripcion:"El 4 de diciembre de 2014, Chris Martin anunció en una entrevista con Zane Lowe en BBC Radio 1 que Coldplay estaba trabajando en su séptimo álbum de estudio, A Head Full of Dreams. Martin comentó que podría ser el último álbum de la banda y lo comparó con Harry Potter: «Es nuestra séptima cosa, y la forma en que lo vemos, es como el último libro de Harry Potter o algo así. Agregó que a diferencia de sus esfuerzos de promoción de Ghost Stories, la banda realizará una gira por el séptimo disco. En una entrevista con Jo Whiley en BBC Radio 2, Martin insinuó el estilo del álbum al decir que la banda estaba tratando de hacer algo colorido y edificante, pero no grandilocuente. También afirmó que será algo para «mover los pies"
        },
        {
            nombre:"2019-2020: Everyday Life",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/coldplay-k0tC--1024x512%40abc.jpg?alt=media&token=b63b7742-2c83-4b5f-bd46-35fc0a19c06d",
            descripcion:"El 26 de septiembre de 2019, Global Citizen anunció que Coldplay actuaría en Global Goal Live: The Possible Dream el 26 de septiembre de 2020. El 18 de octubre de 2019, comenzaron a aparecer misteriosos carteles en blanco y negro en varios países del mundo, en donde se presentaba a la banda con ropa de estilo vintage y una fecha que muestra el 22 de noviembre de 1919. La banda también cambió sus fotos de perfil en las redes sociales a un sol y una luna, lo que hace que los fanáticos especulen sobre un lanzamiento inminente de nuevo material. El 19 de octubre de 2019, se publicó un teaser críptico de 5 segundos en las redes sociales con música orquestal de fondo. El 21 de octubre de 2019, en una carta enviada a los aficionados."
        },
        {
            nombre:"2021-presente: Music of the Spheres",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/FON_W6gXsAMRLBy-scaled.jpg?alt=media&token=91d7d6af-920a-42c9-8de2-b77f6f04d7b3",
            descripcion:"El 29 de abril de 2021, Coldplay anunció un nuevo sencillo llamado «Higher Power» que se lanzará el 7 de mayo de 2021 con una transmisión de video en vivo que coincidirá con el lanzamiento del sencillo que se transmitirá desde la Estación Espacial Internacional. Chris Martin declaró en una entrevista con Zane Lowe que la banda trabajaría con Max Martin y su equipo tanto en la canción como en el nuevo álbum. Dijo: «Max es nuestro productor en este momento para todo lo que hacemos». El 4 de mayo de 2021, Coldplay fue anunciado como el acto de apertura de los Brit Awards de 2021, donde interpretarían «Higher Power»"
        },
    ]

    return(
        
        <>
            <h1 className="text-center titulo p-5">{titulo}</h1>
                 <div className="container">
                     <div className="row row-cols-1 row-cols-md-1 g-5">

                    {
                        periodos.map(function(periodo){
                            return(
                            <>
                                <div className="container">
                                    <div className="row my-5">
                                        <div className="col-12 col-md-6">

                                            <img src={periodo.foto} alt="foto" className=" img-fluid w-100"/>

                                        </div>
                                        <div className="col-12 col-md-6 border p-3 descripcionh">
                                            <h2 className="text-center fs-1">{periodo.nombre}</h2>
                                            <h5 className="text-center">{periodo.descripcion}</h5>
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