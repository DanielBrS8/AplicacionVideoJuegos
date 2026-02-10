import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import { useVideojuegoSeleccionado } from '@/store/VideojuegoSeleccionadoStore'
import { Card, Chip, Icon, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native-paper'
export default function detalle() {

  const {VideojuegoSeleccionado,setVideojuegoSeleccionado}=useVideojuegoSeleccionado()

  const tema = useTheme()

  const prestado = VideojuegoSeleccionado.prestado==="" ? false: true

  function accionBorrarVideojuego(){



  }

  return (
    <View style={{backgroundColor:tema.colors.primary}} className='flex-1'>
      
      <ScrollView>
        <Image
          source={{uri : VideojuegoSeleccionado.caratula}}
          className='w-full]'
          style={{ height: 280,backgroundColor:tema.colors.elevation.level1 }}
        />

        <Card>
          <Card.Content>
              <Text variant="headlineSmall">{VideojuegoSeleccionado.nombre}</Text>
              <Text variant="bodyMedium" style={{color:tema.colors.onSurfaceVariant}}>{VideojuegoSeleccionado.marca}  {VideojuegoSeleccionado.año}</Text>

              <View className='flex-row'>
                  <Icon size={32} source={VideojuegoSeleccionado.sistema.id} color={tema.colors.primary}/>
                  <Text>{VideojuegoSeleccionado.sistema.nombre}</Text>
              </View>

              {
                prestado &&(

                  <Chip icon={"account"}>Prestado a {VideojuegoSeleccionado.prestado}</Chip>

                )
                
              }

              {
                !prestado&&(

                 <Chip mode="outlined" icon={"check"}>Disponible</Chip>

                )
              }
              
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Text variant="titleMedium">Descripcion</Text>
            <Text variant="bodyMedium">{VideojuegoSeleccionado.descripcion}</Text>
          </Card.Content>
        </Card>


      </ScrollView>
      
    </View>
  )
}