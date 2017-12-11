import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import Foot from './../components/footer';

//The screen for the notifications

export default class Notifications extends Component  {
  static navigationOptions = {
  //giving a icon to the tab and the color if its is active
     tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-notifications" style={{color: tintColor}} />
    ),
     }
 
render() {
 
    return (
      <Container>
        
        <View style={{flex:1,backgroundColor:"#2196F3",alignItems:"center"}}>
        <Text style={{marginTop:200,fontSize:35,fontWeight:"bold",color:"white"}}>Notifications</Text>
    </View>
        <Foot />
        </Container>
      
    );
}
}
// styles for the screen
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});
