import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, onEmailChanged] = React.useState('');
  const [wrongEmail, setError] = React.useState('');

  function validateAndShowAlert() {
    if (validateEmail(email)) {
      setError("");
      onEmailChanged("");
      showAlert();
    } else {
      setError("* Invalid Email Format!");
    }
  }

  function showAlert() {
    Alert.alert('Alert', 'Thanks for subscribing, stay tuned!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  return <View style={Styles.mainContainer}>
    <Image source={require('../assets/little-lemon-logo-grey.png')}
      resizeMode="contain"
      accessible={true}
      accessibilityLabel={'Little Lemon Logo Grey'}
      style={Styles.imageStyle} />
    <Text style={Styles.title}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text>
    <TextInput
      placeholder="Type your email"
      onChangeText={onEmailChanged}
      value={email}
      style={Styles.inputBoxStyle}
      keyboardType={'email-address'}
      vali />
    <Text style={[Styles.errorStyle, wrongEmail.length > 0 ? Styles.marginBottomTwenty : Styles.marginBottomZero]}>{wrongEmail}</Text>
    <Pressable onPress={() => email.length > 0 ? validateAndShowAlert() : ({})}>
      <Text style={[Styles.buttonStyle, email.length > 0 ? Styles.activeBtnBgColor : Styles.inActiveBtnBgColor]}>Subscribe</Text>
    </Pressable>
  </View>;
};

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageStyle: {
    width: 100,
    height: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 17,
    margin: 50,
    textAlign: 'center',
  },
  inputBoxStyle: {
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
    marginHorizontal: 25,
    borderRadius: 5,
  },
  buttonStyle: {
    color: "#fff",
    padding: 13,
    marginVertical: 8,
    margin: 25,
    borderRadius: 5,
    textAlign: 'center',
  },
  activeBtnBgColor: {
    backgroundColor: "#495e57",
  },
  inActiveBtnBgColor: {
    backgroundColor: "#808080",
  },
  errorStyle: {
    fontSize: 13,
    color: "#FF0000",
    marginHorizontal: 25,
  },
  marginBottomZero: {
    marginBottom: 0,
  },
  marginBottomTwenty: {
    marginBottom: 20,
  }
});

export default SubscribeScreen;
