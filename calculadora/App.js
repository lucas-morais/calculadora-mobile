import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Display from './components/Display';
import PadButton from './components/PadButton';

export default function App() {

  const [ displayValue, setDisplayValue ] = useState('0');
  
  const addDigit = (n) => {
    setDisplayValue(n)
  }

  const clearMemory = () => {
    setDisplayValue('0');
  }

  const setOperation = (operation) => {

  }

  return (
    <View style={styles.container}>
      <Display value={ displayValue } />
      <View style={ styles.buttons }>   
        <PadButton label="AC" triple onClick={clearMemory}/>      
        <PadButton label="/" operation onClick={() => { setOperation('/')}}/>      
        <PadButton label="7" onClick={ () => { addDigit(7)}}/>      
        <PadButton label="8" onClick={ () => { addDigit(8)}}/>      
        <PadButton label="9" onClick={ () => { addDigit(9)}}/>      
        <PadButton label="*" operation onClick={() => { setOperation('*')}}/>      
        <PadButton label="4" onClick={ () => { addDigit(4)}}/>      
        <PadButton label="5" onClick={ () => { addDigit(5)}}/>      
        <PadButton label="6" onClick={ () => { addDigit(6)}}/>      
        <PadButton label="-" operation onClick={() => { setOperation('-')}}/>      
        <PadButton label="1" onClick={ () => { addDigit(1)}}/>      
        <PadButton label="2" onClick={ () => { addDigit(2)}}/>      
        <PadButton label="3" onClick={ () => { addDigit(3)}}/>      
        <PadButton label="+" operation onClick={() => { setOperation('+')}}/>      
        <PadButton label="0" double onClick={ () => { addDigit(0)}}/>      
        <PadButton label="." onClick={ () => { addDigit('.')}}/>      
        <PadButton label="=" operation onClick={() => { setOperation('=')}}/>      
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
