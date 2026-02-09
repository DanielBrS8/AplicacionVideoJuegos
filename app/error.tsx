import { View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Divider, Text } from 'react-native-paper'

export default function error() {

  const params = useLocalSearchParams<{error:string,mensaje:string}>()

  return (
    <View>
      <Text variant="titleLarge" >Se ha producido un error</Text>
      <Text variant="bodyMedium" >{params.error}</Text>
      <Divider/>
      <Text variant="titleLarge" >Detalle</Text>
      {
        params.mensaje!=undefined &&(

          <Text variant="bodyMedium" >{params.mensaje}</Text>

        )
      }
    </View>
  )
}