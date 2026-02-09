import { DatosFormularioVideojuego, Videojuego, Videojuegos } from "@/model/Types";
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

export async function consultarVideojuegos():Promise<Videojuegos> {
    
    const url = "http://10.0.2.2:3000/videojuegos?_expand=sistema"
    const respuesta = await axios.get(url)
    return respuesta.data
}

export async function borrarVidejuego(id: string): Promise<void> {
    const url = `http://10.0.2.2:3000/videojuegos/${id}`
    await axios.delete(url)
}


export async function crearVideojuego(datos: DatosFormularioVideojuego): Promise<Videojuego> {
    const url = "http://10.0.2.2:3000/videojuegos"
    const datosParaApi = {
        id: uuidv4(),
        nombre: datos.nombre,
        marca: datos.marca,
        descripcion: datos.descripcion,
        caratula: datos.caratula,
        año: datos.año,
        prestado: datos.prestado,
        sistemaId: datos.sistema.id
    }
    const respuesta = await axios.post(url, datosParaApi)
    return respuesta.data
}


export async function modificarVideojuego(id: string, datos: DatosFormularioVideojuego): Promise<Videojuego> {
    const url = `http://10.0.2.2:3000/videojuegos/${id}`
    const datosParaApi = {
        id: id,
        nombre: datos.nombre,
        marca: datos.marca,
        descripcion: datos.descripcion,
        caratula: datos.caratula,
        año: datos.año,
        prestado: datos.prestado,
        sistemaId: datos.sistema.id
    }
    const respuesta = await axios.put(url, datosParaApi)
    return respuesta.data
}

export async function prestarVideojuego(videojuego: Videojuego, nombrePersona: string): Promise<Videojuego> {
    const videojuegoModificado: DatosFormularioVideojuego = {
        nombre: videojuego.nombre,
        marca: videojuego.marca,
        descripcion: videojuego.descripcion,
        caratula: videojuego.caratula,
        año: videojuego.año,
        prestado: nombrePersona,
        sistema: videojuego.sistema
    }
    return await modificarVideojuego(videojuego.id, videojuegoModificado)
}

export async function devolverVideojuego(videojuego: Videojuego): Promise<Videojuego> {
    return await prestarVideojuego(videojuego, "")
}