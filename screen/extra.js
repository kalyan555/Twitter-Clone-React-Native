import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { StyleSheet, View, Image,} from 'react-native';

//The screen for the extra contents which indicaates that the work is not done
// it consists of the image and a header
export default class Extra extends Component {
  render() {
      let text= `             Why so Serious ?
        This page is yet to come `
    return (
      <Container>
                 <Header marginTop={25} style={styles.Header}>
                      <Left>
                         <Image
                           style={{width:50,height:50,borderRadius:25}}
                           source={require('./../flash.jpg')}
                         />
                       </Left>
                       <Body>
                         <Title style={styles.title}>Yet to Come</Title>
                       </Body>
                       <Right /> 
                     </Header>      
        <Content style={styles.cont}>
          <Text style={styles.txt}>
               {text}
          </Text>

          <Image
            style={styles.img}
            source={require('./../images/joker.jpg')}
           />
        </Content>
        
      </Container>
    );
  }
}
//Styles for the screen
const styles= StyleSheet.create({
    Header:{
      backgroundColor:"white",
      height:70,
      backgroundColor:"black"
    },
    title:{
      color:"#2196F3",
      fontSize:25,
    },
    cont:{
        backgroundColor:"black",
        alignItems:"center",
        alignContent:"center",
    },
    img:{
        width:330,
        height:515,
        borderRadius:25,
        marginTop:10,
    },
    txt:{
        fontSize:21,
        color:"white",

    },
});