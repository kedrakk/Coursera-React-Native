import React from 'react';
import {View, StyleSheet} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeBody from './components/WelcomeBody';

function App() {
  const styles = StyleSheet.create({
    boxStyle: {
      backgroundColor: '#F4CE14',
      marginBottom: 10,
    },
    innerBoxStyle: {
      backgroundColor: '#495E57',
    },
  });
  return (
    <>
      <View style={styles.boxStyle}>
        <LittleLemonHeader />
        <WelcomeBody />
      </View>
      <View style={styles.innerBoxStyle}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

export default App;
