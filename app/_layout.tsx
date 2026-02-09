import "../global.css"
import { useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from "expo-router"
import { PaperProvider } from "react-native-paper"
import { temaOscuro } from "@/themes/TemaOscuro"
import { temaClaro } from "@/themes/TemaClaro"


export default function _layout() {
  const colorScheme = useColorScheme()
  const tema = colorScheme === 'dark' ? temaOscuro : temaClaro

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
      </Stack>
      </PaperProvider>
  )
}