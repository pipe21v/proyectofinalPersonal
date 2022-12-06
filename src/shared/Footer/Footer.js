import './Footer.css'

export function Footer(){

    return(

        <footer>
            <div class="container-fluid">
                <div class="row p-5 pie">
                    <div class="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotylflm.appspot.com/o/Coldplay_logo.png?alt=media&token=c44cad2a-c1ad-4fc4-91ff-2dd6a02524d3" alt="logo" class="img-fluid w-100"/>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <h2 class="fw-bold text-light">SOBRE LA BANDA</h2>
                        <h4 class="text-light">Banda de Pop Rock</h4>
                        <br/>
                        <h2 class="fw-bold text-light">SOBRE LA BANDA</h2>
                        <h4 class="text-light">Banda de Pop Rock</h4>
                        <br/>
                    </div>
                    <div class="col-12 col-md-4">
                        <i class="bi bi-instagram fuente me-5 text-light"></i>
                        <i class="bi bi-facebook fuente me-5 text-light"></i>
                        <i class="bi bi-youtube fuente me-5 text-light"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}