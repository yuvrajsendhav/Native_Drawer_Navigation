import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Home';
import About from './src/About';
import Service from './src/Service';
import Contacts from './src/Contacts';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Service" component={Service} />
        <Drawer.Screen name="Contacts" component={Contacts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
