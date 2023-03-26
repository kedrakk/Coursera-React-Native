import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

export default function LittleLemonHeader() {
  const styles = StyleSheet.create({
    boxStyle: {
      backgroundColor: '#F4CE14',
      marginBottom: 10,
    },
    textStyle: {
      fontSize: 25,
      color: '#000000',
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Little Lemon</Text>
      </View>
    </SafeAreaView>
  );
}
