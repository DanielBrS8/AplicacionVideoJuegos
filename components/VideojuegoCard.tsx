import { View } from 'react-native'
import React, { useState } from 'react'
import { Videojuego } from '@/model/Types'
import { Badge, Button, Card, Chip } from 'react-native-paper'
import { Text } from 'react-native-paper'

type VideojuegoCardType={

    videojuego:Videojuego,
    accionPrestarVideojuego:(videojuego:Videojuego)=>  void
    accionDevolverVideojuego:(videojuego:Videojuego)=>  void
    accionVerVideojuego:(videojuego:Videojuego)=>  void
}

export default function VideojuegoCard({videojuego,accionPrestarVideojuego,accionDevolverVideojuego,accionVerVideojuego}:VideojuegoCardType) {


    const prestado = videojuego.prestado!="" ? "disponible": "no disponible"

    const Devolver = videojuego.prestado!="" ? "Prestar": "Devolver"

    const [estaPrestado,setPrestado]=useState(videojuego.prestado!="" ? "disponible": "no disponible")

  return (
    <Card>
        <Card.Cover source={{uri:videojuego.caratula}}/>
        <Card.Content>
            <View className='flex-row'>
                <Text className='pr-5' variant="titleLarge">{videojuego.nombre}</Text>
                <Chip icon={"gamepad-variant"}>{videojuego.sistema.nombre}</Chip>

            </View>

            <View className='flex-row pl-1'>
                <Text className='pr-2' variant="bodyMedium">{videojuego.año}</Text>
                <Badge className={"bg-[#D32F2F]"}>{prestado}</Badge>
            </View>

            <View className='p-5'>
                <Text variant="bodyMedium">{videojuego.descripcion}</Text>
            </View>

            {
                estaPrestado&&(

                    <Text variant="bodySmall">
                        Prestado a {videojuego.prestado}
                    </Text>

                )
            }

        </Card.Content>

        <Card.Actions>
            <Button onPress={()=> accionVerVideojuego(videojuego)}>Ver</Button>
            <Button onPress={()=> Devolver==="Devolver"? accionDevolverVideojuego(videojuego):accionPrestarVideojuego(videojuego)} mode="contained-tonal">{Devolver}</Button>
        </Card.Actions>

    </Card>
  )
}