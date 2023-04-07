import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';

export default function ThemeChangeSample() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        styles.mainContainer,
        colorScheme === 'light'
          ? styles.lightBackgroundColor
          : styles.darkBackgroundColor,
      ]}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text
          style={[
            styles.headerText,
            colorScheme === 'light'
              ? styles.textColorLight
              : styles.textColorDark,
          ]}>
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.bodyText,
          colorScheme === 'light'
            ? styles.textColorLight
            : styles.textColorDark,
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us! \n Little Lemon is a
        charming neighborhood bistro that serves simple food and classic
        cocktails in a lively but casual environment. We would love to hear more
        about your experience with us! \nLittle Lemon is a charming neighborhood
        bistro that serves simple food and classic cocktails in a lively but
        casual environment. We would love to hear more about your experience
        with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  mainContainer: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  headerText: {
    fontSize: 28,
    textAlign: 'center',
    padding: 20,
  },
  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  lightBackgroundColor: {
    backgroundColor: '#fff',
  },
  darkBackgroundColor: {
    backgroundColor: '#333333',
  },
  textColorLight: {
    color: '#333',
  },
  textColorDark: {
    color: '#fff',
  },
});
