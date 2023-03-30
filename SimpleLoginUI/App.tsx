/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginComponents from './components/LoginComponents';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import {View, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginComponents />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {backgroundColor: '#333333'},
});

export default App;
