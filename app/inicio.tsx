import { View, Text } from 'react-native'
import React from 'react'
import VideojuegoCard from '@/components/VideojuegoCard'
import { Videojuego } from '@/model/Types'

export default function inicio() {

  function hola(){

  }
  function hola1(){
    
  }
  function hola2(){
    
  }

  const videojuego1: Videojuego = {
      id: "v8",
      nombre: "Forza Motorsport",
      marca: "Turn 10 Studios",
      descripcion: "Simulador de conducción enfocado en el realismo.\nOfrece una gran variedad de coches y circuitos detallados.\nEl sistema de físicas y progresión evoluciona con el tiempo.",
      caratula: "https://cms-assets.xboxservices.com/assets/10/40/1040c811-0c5f-4897-aceb-3855f79b561c.jpg?n=Forza-Motorsport_Sneaky-Slider-1084_20th-Anniversary-keyart_1600x675.jpg%202",
      año: 2023,
      prestado: "Ana López",
      sistema: {
        id: "xbox",
        nombre: "Xbox Series X/S"
      }
    }

  return (
    <View>
      <VideojuegoCard videojuego={videojuego1} accionPrestarVideojuego={function (videojuego: Videojuego): void {
        throw new Error('Function not implemented.')
      } } accionDevolverVideojuego={function (videojuego: Videojuego): void {
        throw new Error('Function not implemented.')
      } } accionVerVideojuego={function (videojuego: Videojuego): void {
        throw new Error('Function not implemented.')
      } }/>
    </View>
  )
}