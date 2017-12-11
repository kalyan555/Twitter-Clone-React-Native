import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import { DrawerNavigator,StackNavigator} from 'react-navigation';
import home from './screen/home';
import SideBar from './components/SideBar';
import Extra from './screen/extra';
import Tabscreen from './screen/tabs';

//The main Drawer which takes in the other screen like tab scree,home screen

const App = DrawerNavigator(
    {
        //screen routes and their names
      HomeScreen:{
          screen: home,
          path:"/",
      },
      SideBarScreen:{
        screen: SideBar,
        path:"/side"
      },
      ExtraScreen:{
          screen:Extra,
          path:"/extra",
      },
      Tabs:{
          screen: Tabscreen,
          path: "/tabs",
      },
    },
    {
    initialRouteName:"Tabs",
    contentComponent: props => <SideBar {...props} />
    /*The custom sidebar is implemented by the customComponent for which the code 
     is written in the SideBar.js*/
    }
);

export default App;

//Exporting the main final product