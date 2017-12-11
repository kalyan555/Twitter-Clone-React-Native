import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback,Image, View,StyleSheet} from 'react-native';
import {Header, Title, Left, Icon, Right, Button, Body,} from "native-base";

//The header component for the home page
const CHeader = (props) => {
  const {navigation} =props;


  return (
   
    <Header marginTop={25} style={styles.Header}>
                <Left>
                  <Image
                    style={{width:50,height:50,borderRadius:25}}
                    source={require('./../flash.jpg')}
                  />
                </Left>
                <Body>
                  <Title style={styles.title}>{props.name}</Title>
                </Body>
                <Right />
              </Header>
  );
};

//Styles for the screen
const styles = StyleSheet.create({
  Header:{
    backgroundColor:"white",
    height:70,
  },
  title:{
    color:"#2196F3",
    fontSize:23,
  },
});

//exporting the component

export default CHeader;