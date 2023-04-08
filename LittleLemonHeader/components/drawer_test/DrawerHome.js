import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerWelcome from './DrawerWelcome';
import DrawerMenu from './DrawerMenu';

const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="DrawerWelcome" component={DrawerWelcome} />
        <Drawer.Screen name="DrawerMenu" component={DrawerMenu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
