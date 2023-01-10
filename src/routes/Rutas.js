import { Route, Routes } from "react-router-dom"

import { Home } from'../Home/Home'
import { Menu } from'../shared/Menu/Menu'
import { Historia } from "../Historia/Historia"
import { Integrantes } from "../Integrantes/Integrantes"
import { Albumes } from "../Albumes/Albumes"
import { Music } from "../Music/Music"
import { Mercancia } from "../Mercancia/Mercancia"
import { Ampliarinfo } from "../Ampliarinfo/Ampliarinfo"

export function Rutas(){
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/integrantes" element={<Integrantes />} />
                <Route path="/albumes" element={<Albumes />} />
                <Route path="/music" element={<Music />} />
                <Route path="/mercancias" element={<Mercancia />} />
                <Route path="/tienda" element={<Ampliarinfo />} />
            </Routes>
        </>

      )
}