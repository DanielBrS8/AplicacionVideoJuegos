import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const detalle = () => {
  return (
    <View style={styles.container}>
      <Text>detalle</Text>
    </View>
  )
}

export default detalle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
