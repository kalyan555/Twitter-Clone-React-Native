import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import Foot from './../components/footer';

//The screen for the search screen

class SearchScreen extends Component  {
  static navigationOptions = {
    //giving a icon to the tab and the color if its is active
     tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{color: tintColor}} />
    
        ),
     }
 
render() {
 
    return (
      <Container>
        
          <View style={{flex:1}}>
    
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

export default SearchScreen;