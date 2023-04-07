import React from 'react';
import {ScrollView, Text, StyleSheet, TextInput, Pressable} from 'react-native';

export default function LoginComponents({navigation}) {
  const [email, onEmailChanged] = React.useState('');
  const [password, onPasswordChanged] = React.useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        placeholder="email"
        onChangeText={onEmailChanged}
        value={email}
        style={styles.inputBoxStyle}
        keyboardType={'email-address'}
      />
      <TextInput
        placeholder="password"
        onChangeText={onPasswordChanged}
        value={password}
        style={styles.inputBoxStyle}
        secureTextEntry={true}
        keyboardType={'default'}
      />
      <Pressable onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.buttonStyle}>Login</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBoxStyle: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
  },
  buttonStyle: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#004944',
    color: '#fff',
    textAlign: 'center',
  },
});
