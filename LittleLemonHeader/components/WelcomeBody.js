import {Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

export default function WelcomeBody() {
  const styles = StyleSheet.create({
    boxStyle: {
      flex: 1,
    },
    headerStyle: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    labelStyle: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
  });
  return (
    <ScrollView indicatorStyle={'white'} style={styles.boxStyle}>
      <Text style={styles.headerStyle}>Welcome to Little Lemon</Text>
      <Text style={styles.labelStyle}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us! \n Little Lemon is a
        charming neighborhood bistro that serves simple food and classic
        cocktails in a lively but casual environment. We would love to hear more
        about your experience with us! \nLittle Lemon is a charming neighborhood
        bistro that serves simple food and classic cocktails in a lively but
        casual environment. We would love to hear more about your experience
        with us!
      </Text>
    </ScrollView>
  );
}
