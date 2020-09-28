/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
