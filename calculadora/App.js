import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Display from './components/Display';
import PadButton from './components/PadButton';

export default function App() {

  const [ displayValue, setDisplayValue ] = useState('0');
  const [ clearDisplay, setClearDisplay ] = useState(false);
  const [ currentOperation, setCurrentOperation ] = useState(null);
  const [ values, setValues ] = useState([0, 0]);
  const [current, setCurrent] = useState(0)
  
  const addDigit = (n) => {
    if(n === '.' && displayValue.includes('.')) {
      return;
    }
    const haveToClearDisplay = displayValue === '0' 
      || clearDisplay;
    const currentValue = haveToClearDisplay ? '' : displayValue;
    const newDisplayValue = currentValue + n;
    setDisplayValue(newDisplayValue);
    setClearDisplay(false);

    if( n !== '.') {
      const newValue = parseFloat(newDisplayValue);
      const newValuesArray = [...values];
      newValuesArray[current] = newValue;
      setValues(newValuesArray)
    }
  }

  const setOperation = (operation) => {
    if(current === 0) {
      setCurrentOperation(operation)
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = operation === '=';
      const newValuesArray = [...values];
      try{
         newValuesArray[0] = 
            eval(`${values[0]} ${currentOperation} ${values[1]}`);
        } catch(e) {
          newValuesArray[0] = values[0];
      }
      newValuesArray[1] = 0;
      setDisplayValue(newValuesArray[0]);
      setCurrentOperation( equals ? null : operation);
      setCurrent( equals ? 0 : 1);
      setValues(newValuesArray)
      setClearDisplay(true);
    }
  }

  const clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
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
