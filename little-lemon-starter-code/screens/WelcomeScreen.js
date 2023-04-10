import * as React from 'react';
import { View,Image,StyleSheet,Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={Styles.mainContainer}>
    <Image source={require('../assets/little-lemon-logo.png')}
      resizeMode="contain"
      accessible={true}
      accessibilityLabel={'Little Lemon Logo'} 
      style={Styles.imageStyle} />
      <Text style={Styles.title}>
          Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={()=>navigation.navigate('subscribe')}>
        <Text style={Styles.buttonStyle}>Newsletter</Text>
      </Pressable>
  </View>;
};

const Styles=StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  imageStyle:{
    width:130,
    height:170,
    alignSelf:'center',
    flex:2,
  },
  title:{
    fontSize:18,
    margin: 50,
    textAlign:'center',
    fontWeight:'bold',
    flex:1,
  },
  buttonStyle:{
    backgroundColor:"#495e57",
    color:"#fff",
    padding: 13,
    marginVertical: 8,
    margin: 30,
    borderRadius:5,
    textAlign:'center',
  },
});

export default WelcomeScreen;
