import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native'; 
import {
   Container, Header, Content,
   Card, CardItem, Thumbnail, Text, 
   Button, Icon, Left, Body ,Right
  } from 'native-base';

//This components in used for the time that is to be displayed on the home page  

export default class Greeting extends Component {
/*
This consists of the card ,carditem in which the content is placed as
the pic of the user(thumbnail) and info is shown on the left and then below info
shown and at last the 4 buttons are placed
*/
  render() {
    return (
          <Card >
            {/* this below carditem is for the thumnail and the user name */}
            <CardItem >
              <Left>
                <Thumbnail source={require('./../images/s.jpg')} />
                <Body>
                  <Text style={{fontSize:20}}>Superman</Text>
                  <Text note>few minutes ago</Text>
                </Body>
              </Left>
              <Right>
              <Icon name='ios-arrow-down' />
     
              </Right>
            </CardItem>

             {/* this below carditem is for the content text and the image */}
            <CardItem >
              <Body style={{marginLeft:60}}>
              <Text style={{paddingBottom:10,fontSize:15}}>
               It’s not who we are underneath, but what we do that defines us.
                </Text >
                  <Image source={require('./../images/bat.jpg')} 
                   style={{height: 220, width: 320,borderRadius:10}}
                />
               
              </Body>
            </CardItem>

            {/* this below carditem for the 4 buttons */}
            <CardItem style={{marginLeft:35}}>
            
            <Button iconLeft transparent>
                <Icon name='ios-chatbubbles' 
                    style={styles.allcolor} />
                <Text style={styles.allcolor}>60</Text>
            </Button> 
            <Button iconLeft transparent>
                <Icon name='ios-game-controller-a'
                    style={styles.allcolor}/>
                <Text style={styles.allcolor}>4</Text>
            </Button>
            <Button iconLeft transparent>
                <Icon name='ios-heart' 
                    style={styles.allcolor} />
                <Text style={styles.allcolor}>50</Text>
            </Button>
            <Button iconLeft transparent>
                <Icon name='mail' 
                    style={styles.allcolor}/>
                <Text style={styles.allcolor}></Text>
            </Button>
              
        
            
          </CardItem>
          </Card>
          
    );
  }
}
//Styles for the components
const styles=StyleSheet.create({
  allcolor:{
    color:"#2196F3",
  },
})
