import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const prestamo = () => {
  return (
    <View style={styles.container}>
      <Text>prestamo</Text>
    </View>
  )
}

export default prestamo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
