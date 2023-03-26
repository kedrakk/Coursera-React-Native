/* eslint-disable react-native/no-inline-styles */
import {Text, ScrollView} from 'react-native';
import React from 'react';

export default function WelcomeBody() {
  return (
    <ScrollView indicatorStyle={'white'} style={{flex: 1}}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
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
