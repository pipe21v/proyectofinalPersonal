import './Footer.css'

export function Footer(){

    return(

        <footer>
            <div className="container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/Coldplay_logo.png?alt=media&token=c44cad2a-c1ad-4fc4-91ff-2dd6a02524d3" alt="logo" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h2 className="fw-bold text-light">SOBRE LA BANDA</h2>
                        <h4 className="text-light">Banda de Pop Rock</h4>
                        <br/>
                        <h2 className="fw-bold text-light">SOBRE LA BANDA</h2>
                        <h4 className="text-light">Banda de Pop Rock</h4>
                        <br/>
                    </div>
                    <div className="col-12 col-md-4">
                        <i className="bi bi-instagram fuente me-5 text-light"></i>
                        <i className="bi bi-facebook fuente me-5 text-light"></i>
                        <i className="bi bi-youtube fuente me-5 text-light"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}