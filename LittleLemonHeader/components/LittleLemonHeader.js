/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export default function LittleLemonHeader() {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#F4CE14',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#000000',
            textAlign: 'center',
            padding: 10,
            fontWeight: 'bold',
          }}>
          Little Lemon
        </Text>
      </View>
    </SafeAreaView>
  );
}
