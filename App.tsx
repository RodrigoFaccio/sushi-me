import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
export default function App() {
  const [loaded] = useFonts({
    Geometria: require('./assets/fonts/Geometria/Geometria.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'Geometria'}}>Geometria</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
