import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

export default function LittleLemonHeader() {
  const styles = StyleSheet.create({
    boxStyle: {
      backgroundColor: '#EE9972',
      marginBottom: 10,
    },
    textStyle: {
      padding: 40,
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
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
