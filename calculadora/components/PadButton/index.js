import React from 'react';
import { 
  Dimensions, 
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const baseSide = Dimensions.get('window').width / 4;

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: baseSide,
    width: baseSide,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  opperationButton: {
    color:'#fff',
    backgroundColor: '#f8a231',
  },
  buttonDouble: {
    width: baseSide * 2,
  },
  buttonTripple: {
    width: baseSide * 3,
  }
});

export default ({ label, onClick, double, triple, operation}) => {
  const stylesButton = [styles.button]
  if(double) stylesButton.push(styles.buttonDouble);
  if(triple) stylesButton.push(styles.buttonTripple);
  if(operation) stylesButton.push(styles.opperationButton);
  return (
    <TouchableHighlight onPress={ onClick}>
      <Text style={ stylesButton }>{ label }</Text>
    </TouchableHighlight>
  );
}