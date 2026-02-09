import { View } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon, useTheme ,Text} from 'react-native-paper'
import { useListaVideojuegos } from '@/store/ListaVideoJuegosStore';
import { consultarVideojuegos } from '@/helpers/VideoJuegosApi';
import { router } from 'expo-router';
import { navegarError } from '@/nav/Navegacion';


export default function index() {
  const theme = useTheme();

  const {listaVideojuegos,setListaVidejuegos} =useListaVideojuegos()

  function accionConsultarVideojuegos(){

    consultarVideojuegos()
      .then((listaVideojuegos) => {setListaVidejuegos(listaVideojuegos)
                                  setTimeout(() => {
                                    router.replace("/inicio")
                                  }, 500);

       } )
      .catch((error)=> navegarError(router,"No se puedo cargar la lista de videojuegos",error.toString()))

  }

  useEffect(accionConsultarVideojuegos,[])

  return (
    <LinearGradient className='flex-1'  colors={['#0F2027', '#203A43', '#2C5364']}>
      <View className='flex-1 justify-center items-center'>
        <View  className='bg-rgba(255,255,255,0.08) p-28 rounded-32 mb-24'>
          <Icon source="sword-cross" size={96} color={theme.colors.primary}/>
          <Text variant="displaySmall" style={{ color: "white", fontWeight:'700'}}  >Mis Videojuegos</Text>
          <Text variant="titleMedium" className='text-rgba(255,255,255,0.75) mt-8' >Gestiona tu coleccion</Text>
        </View>
      </View>
    </LinearGradient>
  )
}