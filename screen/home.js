import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, 
  Button, Left, Right, Body, Icon,
  Tab, Tabs, TabHeading,
  Card, CardItem, Thumbnail,Fab,Item,Input,
} from 'native-base';

import { StyleSheet, Text, View, Image, ScrollView ,TouchableOpacity} from 'react-native';

import {DrawerNavigator } from 'react-navigation';

import Greeting from './../components/info';

import Foot from './../components/footer';

//The main page which is displayed on the app loading
export default class home extends Component {
 static navigationOptions={
     toolBarlabel: 'home',
     drawerIcon: () =>{
       //info abou this page in the drawer menu
       return(
           <Icon name="home"/>

       );
     },
     tabBarIcon: ({ tintColor }) => (
       //icon and the color for the tab that is selected
      <Icon name="home" style={{color: tintColor,}} />
),
 }
  render() {   

   return(
      
        <Container>

              <ScrollView>
              {/* importing the greeting class from the info.js */}
                    <Greeting />
                    
                    <Greeting />
                    
                    <Greeting />

                </ScrollView>     
        {/* importing the Foot class from the footer.js */}
                <Foot />
      </Container>
    
    );
  }
}

