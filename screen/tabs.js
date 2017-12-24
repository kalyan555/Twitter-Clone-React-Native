import React, {Component} from 'react';

import {TabNavigator} from 'react-navigation';
import { StyleSheet, Text, View, Image, ScrollView ,TouchableOpacity} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab,Tab,Tabs,TabHeading,Button,Icon,Body,Left,Right} from 'native-base';

import home from './home';
import Extra from './extra';
import TabBarCompo from './TabBarCompo';
import SearchScreen from './SearchScreen';
import MessageScreen from './messages';
import Notifications from './notifications';

// The tab screen for the different tabs that are to be used and theri router configuration
const Tabscreen = TabNavigator({
  //screen routes and their names
    Home: {
      screen: home,
    },
    SearchScreen:{
      screen: SearchScreen,
    },
    Notificationscreen: {
      screen: Notifications,
    },
    Messagescreen: {
      screen: MessageScreen,
    },
   
    
  }, 
  {
    tabBarComponent: props => (
    <TabBarCompo {...props} />), 
    //for the custom component the component is give as TabBarCompo as the name
		tabBarPosition: 'top',
		animationEnabled: true,
		tabBarOptions: {
        activeTintColor: '#2196F3',
        inactiveTintColor: 'grey',
        activeBackgroundColor: "#fff",
        inactiveBackgroundColor: "#fff",
        showIcon: true,
        showLabel: false,
    }
  }
);

export default Tabscreen;

//Exporting the component
