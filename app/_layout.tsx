import "../global.css"
import { useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from "expo-router"
import { Icon, IconButton, PaperProvider, useTheme } from "react-native-paper"
import { temaOscuro } from "@/themes/TemaOscuro"
import { temaClaro } from "@/themes/TemaClaro"
import { useVideojuegoSeleccionado } from "@/store/VideojuegoSeleccionadoStore"
import { Text } from "react-native-paper"
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors"

export default function _layout() {
  const colorScheme = useColorScheme()
  const tema = colorScheme === 'dark' ? temaOscuro : temaClaro
  const {VideojuegoSeleccionado,setVideojuegoSeleccionado}=useVideojuegoSeleccionado()
   const theme = useTheme();
   
  return (
    <PaperProvider theme={tema}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: tema.colors.primary },
          headerTintColor: tema.colors.onPrimary
        }}
       
      >

        <Stack.Screen
          name="index"
          options={{

            animation:"fade",
            headerShown:false

          }}
          />
        <Stack.Screen
          name="inicio"
          options={{

            animation:"fade",
            headerTitle:"Mis Videojuegos"

          }}
        />

        <Stack.Screen
        
          name="operaciones/detalle"
          
          options={{

            headerTitle: ()=>(

              <View>
                  <Text variant="titleSmall">{VideojuegoSeleccionado.nombre}</Text>
                  <Text variant="titleSmall">{VideojuegoSeleccionado.marca}</Text>
              </View>

            ),
            headerRight:()=>(
              <View className="flex-row"> 
            
                <IconButton  size={24} icon={"pencil"} ></IconButton>
                <IconButton size={24} icon={"delete"} ></IconButton>
              </View>
            
            ),
            headerStyle:{backgroundColor:tema.colors.background}

          }}
        />
      </Stack>
      </PaperProvider>
  )
}