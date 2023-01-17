import './Footer.css'

export function Footer(){

    return(

        <footer>
            <div className="container-fluid">
                <div className="row p-4 pie">
                    <div className="col-12 col-md-4 align-self-center ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/Coldplay_logo.png?alt=media&token=c44cad2a-c1ad-4fc4-91ff-2dd6a02524d3" alt="logo" className="img-fluid w-75"/>
                    </div>
                    <div className="col-12 col-md-4 text-center p-3">
                        <h4 className="fw-bold text-light">COLDPLAY</h4>
                        <h5 className="text-light">Banda de Pop Rock</h5>
                        <br/>
                        <h4 className="fw-bold text-light">Luis Felipe Ladino Monsalve</h4>
                        <h5 className="text-light">2023</h5>
                        <br/>
                    </div>
                    <div className="col-12 col-md-4 p-5">
                        
                            <a href='https://www.instagram.com/coldplay/?hl=es'>
                                <i className="bi bi-instagram fuente me-5 text-light w-20"></i>
                            </a>
                            <a href='https://es-la.facebook.com/coldplay/'>
                                <i className="bi bi-facebook fuente me-5 text-light "></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw'>
                                <i className="bi bi-youtube fuente me-5 text-light"></i>
                            </a>
                        
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}