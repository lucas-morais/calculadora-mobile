import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import PadButton from './components/PadButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={ styles.buttons }>   
        <PadButton label="AC"/>      
        <PadButton label="/"/>      
        <PadButton label="7"/>      
        <PadButton label="8"/>      
        <PadButton label="9"/>      
        <PadButton label="*"/>      
        <PadButton label="4"/>      
        <PadButton label="5"/>      
        <PadButton label="6"/>      
        <PadButton label="-"/>      
        <PadButton label="1"/>      
        <PadButton label="2"/>      
        <PadButton label="3"/>      
        <PadButton label="+"/>      
        <PadButton label="0"/>      
        <PadButton label="."/>      
        <PadButton label="="/>      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
