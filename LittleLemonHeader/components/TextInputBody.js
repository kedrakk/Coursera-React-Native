import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function TextInputBody() {
  const [firstName, onFirstNameChanged] = React.useState('');
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Welcome To Little Lemon</Text>
      <Text style={styles.subTitleStyle}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        placeholder="Enter First Name"
        onChangeText={onFirstNameChanged}
        value={firstName}
        style={styles.inputBoxStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  subTitleStyle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  inputBoxStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});
