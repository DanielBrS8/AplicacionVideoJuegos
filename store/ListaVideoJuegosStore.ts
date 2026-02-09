import { Videojuego } from "@/model/Types"
import {create} from "zustand"

export type ListaVideojuegoStore={

    listaVideojuegos:Array<Videojuego>,
    setListaVidejuegos:(videojuegos:Array<Videojuego>) => void

}

export const useListaVideojuegos= create<ListaVideojuegoStore>((set) => ({

    listaVideojuegos:[],
    setListaVidejuegos:(l:Array<Videojuego>) => {

        set({listaVideojuegos:l})

    }

}))


