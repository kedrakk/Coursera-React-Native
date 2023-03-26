/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeBody from './components/WelcomeBody';

function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
        <WelcomeBody />
      </View>
      <View style={{backgroundColor: '#495E57'}}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

export default App;
