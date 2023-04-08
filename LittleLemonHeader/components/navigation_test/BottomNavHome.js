import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MenuScreen from './MenuScreen';
import WelcomeScreen from './WelcomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabBarIcon(focused, color, size, route) {
  let iconName;

  if (route.name === 'Welcome') {
    iconName = focused
      ? 'ios-information-circle'
      : 'ios-information-circle-outline';
  } else if (route.name === 'Menu') {
    iconName = 'ios-list';
  }
  return <Icon name={iconName} size={size} color={color} />;
}

export default function BottomNavHome() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return TabBarIcon(focused, color, size, route);
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
