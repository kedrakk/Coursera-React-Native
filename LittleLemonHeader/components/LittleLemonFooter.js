import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function LittleLemonFooter() {
  const styles = StyleSheet.create({
    boxStyle: {
      backgroundColor: '#EE9972',
      marginBottom: 20,
    },
    textStyle: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      fontStyle: 'italics',
    },
  });

  return (
    <View style={styles.boxStyle}>
      <Text style={styles.textStyle}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}
