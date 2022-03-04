import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Platform, StyleSheet } from 'react-native'

import { View } from '../components/Themed'
import { getBackendActor } from '../lib/actor'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function VideoScreen() {
  const inc = async () => {
    console.log('hitting inc()')
    const start = Date.now()
    const backend = await getBackendActor()
    await backend.inc()
    console.log(`inc() took ${Date.now() - start}s`)
    console.log('go back to home screen, click "Navigate" again, screen should start to lock up')
  }
  return (
    <View style={styles.container}>
      <Button title="Run Increment" onPress={inc} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
