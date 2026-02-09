import { Sistema, Videojuego } from "@/model/Types"
import { create } from "zustand"

type VideojuegoSeleccionadoStore = {

    VideojuegoSeleccionado: Videojuego,
    setVideojuegoSeleccionado: (videojuego: Videojuego) => void

}

const VIDEOJUEGO_NULO: Videojuego = {
    id: "",
    nombre: "",
    marca: "",
    descripcion: "",
    caratula: "",
    año: 0,
    prestado: "",
     sistema: {
        id: "",
        nombre: ""
    }

}

export const useVideojuegoSeleccionado= create<VideojuegoSeleccionadoStore>(set =>({

    VideojuegoSeleccionado:VIDEOJUEGO_NULO,
    setVideojuegoSeleccionado: (v:Videojuego)=>{

        set({VideojuegoSeleccionado:v})

    }

}))

