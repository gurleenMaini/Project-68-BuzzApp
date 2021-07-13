import  React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './screens/facebook';
import Instagram from './screens/instagram';

export default class App extends React.Component {
  render(){
   return <AppContainer />;
}
}
const TabNavigator = createBottomTabNavigator({
facebook:{screen:Facebook},
instragram:{screen:Instagram}
});

const AppContainer = createAppContainer(TabNavigator)
