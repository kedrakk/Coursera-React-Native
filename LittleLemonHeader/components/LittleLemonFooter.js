import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function LittleLemonFooter() {
  const styles = StyleSheet.create({
    boxStyle: {
      backgroundColor: '#F4CE14',
      marginBottom: 10,
    },
    textStyle: {fontSize: 18, color: 'black', textAlign: 'center'},
  });

  return (
    <View style={styles.boxStyle}>
      <Text style={styles.textStyle}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}
