import React from 'react';
import {View, StyleSheet} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import ThemeChangeSample from './components/ThemeChangeSample';

function App() {
  const styles = StyleSheet.create({
    boxStyle: {
      flex: 1,
      backgroundColor: '#333333',
    },
    innerBoxStyle: {
      backgroundColor: '#333333',
    },
  });
  return (
    <>
      <View style={styles.boxStyle}>
        <LittleLemonHeader />
        <ThemeChangeSample />
      </View>
      <View style={styles.innerBoxStyle}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

export default App;
