//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
 
//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

const App = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    ProfilePage: { screen: ProfilePage },
  },
  {
    initialRouteName: 'HomePage',
  }
 );
 export default createAppContainer(App)