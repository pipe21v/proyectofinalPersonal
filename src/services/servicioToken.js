export async function generarToken(){

    const client_id="client_id=b5fed5a9f84f491485b3fbdfb9c5b923"
    const client_secret="client_secret=5dbdbe927250493d92aeb53384507af1"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token

    return(tokenDefinitivo)
}