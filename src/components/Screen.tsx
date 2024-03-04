import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

const Screen = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView style={$.container}>
      {children}
    </SafeAreaView>
  )
}

export default Screen

const $ = StyleSheet.create({
    container: {
        flex: 1,
    }
})