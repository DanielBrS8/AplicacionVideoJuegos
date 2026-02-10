import { View, Text } from 'react-native'
import React from 'react'
import VideojuegoCard from '@/components/VideojuegoCard'
import { Videojuego } from '@/model/Types'
import { useVideojuegoSeleccionado } from '@/store/VideojuegoSeleccionadoStore'
import { router } from 'expo-router'

export default function inicio() {

  const {VideojuegoSeleccionado,setVideojuegoSeleccionado}=useVideojuegoSeleccionado()

  function accionPrestarVideojuego(videojuego:Videojuego){


  }

  function accionDevolverVideojuego(videojuego:Videojuego){


  }

  function accionVerVideojuego(videojuego:Videojuego){

    setVideojuegoSeleccionado(videojuego)
    router.push("/operaciones/detalle")

  }
  
  function getFlatListItem(videojuego:Videojuego){

    <VideojuegoCard videojuego={videojuego} accionPrestarVideojuego={accionPrestarVideojuego} 
    accionDevolverVideojuego={accionDevolverVideojuego}
     accionVerVideojuego={accionVerVideojuego}/>

  }

  return (
    <View>

    </View>
  )
}