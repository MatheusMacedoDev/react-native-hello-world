import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

export default function InputWithLabel({ labelText }) {
  return (
    <View>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 12
    }
})