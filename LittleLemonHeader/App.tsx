import React from 'react';
import {View, StyleSheet} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
// import TextInputBody from './components/TextInputBody';
import LoginScreen from './components/LoginScreen';
// import SectionListItems from './components/SectionListItems';
//import FlatListItems from './components/FlatListItems';
// import WelcomeBody from './components/WelcomeBody';

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
        {/* <WelcomeBody /> */}
        <LoginScreen />
      </View>
      <View style={styles.innerBoxStyle}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

export default App;
