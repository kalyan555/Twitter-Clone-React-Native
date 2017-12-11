import React, { Component } from 'react';
import { 
    Container, Header, Title, Content, 
    Footer, FooterTab, Button, Left, Right, 
    Body, Icon, Text,List,ListItem
} from 'native-base';

import { StyleSheet, View, Image, ScrollView } from 'react-native';

// code for the SideBar content
export default class SideBar extends Component {
    //constructor should bw over ridden for implementing the extra properties
        constructor(props) {    
           super(props);   
            this.state = {    
                shadowOffsetWidth: 1,    
                shadowRadius: 4,    
            };   
        }
        // writing hard code for the wholee sidebar with help of native base
        render(){

            let folowers= `800 `;
            let folowing= `  760 `;
            {/* Dynamically linking the text */}

            return(
                <Container style={{marginTop:30}}>
                    <Content>
                        {/* conistis of
                            images,
                            text,nested text,
                            list with and without icons,
                            footer with icons,
                        */}
                    {/* Rounded Image  of SideBar*/}
                    
                      <Image onPress={() => this.props.navigation.navigate("HomeScreen")}
                        style={{width:80,height:80,borderRadius:40,margin:10,marginLeft:25}}
                        source={require('./../flash.jpg')}
                      />
                    
                    
                  <Text style={{fontSize:23,fontWeight:"600",marginLeft:25}}>
                    Barry Allen
                   </Text>

                   <Text style={{fontSize:16,color:"gray",marginBottom:5,marginLeft:25}}>
                    @flash
                  </Text> 

                    {/* Nested Text for making series of bold and normal text continously */}
                  
                     <Text style={{marginLeft:25}}> 
                     <Text style={{fontWeight: 'bold',}}>
                            {folowers }
                            </Text>
                            <Text style={{fontSize:16,color:"gray"}}>
                                  Followers
                                </Text>

                                <Text style={{fontWeight: 'bold'}}>
                            {folowing }
                            </Text>
                            <Text style={{fontSize:16,color:"gray"}}>
                                  Following
                                </Text>    

                        </Text>
                
                 {/* List of items with icons of SideBar*/}
                
                <List style={{borderTopWidth:0.7,marginTop:20,borderTopColor:"gray"}}>

                            {/*Making the list item to navigate to  a page on clicking by onPress function*/}

                                <ListItem icon button noBorder style={{marginBottom:10}}
                                    onPress={() => this.props.navigation.navigate("ExtraScreen")}
                                    >
                                <Left>
                                    <Icon name="ios-person" style={styles.isize}/>
                                </Left>
                                <Body>
                                <Text style={styles.ifsize}>Profile</Text>
                                </Body>
                                </ListItem>

                                <ListItem icon button noBorder style={{marginBottom:10}}
                                    onPress={() => this.props.navigation.navigate("ExtraScreen")}
                                >
                                <Left>
                                    <Icon name="md-list-box" style={styles.isize}/>
                                </Left>
                                <Body>
                                <Text style={styles.ifsize}>Lists</Text>
                                </Body>
                                </ListItem>

                                <ListItem icon button noBorder style={{marginBottom:10}}
                                    onPress={() => this.props.navigation.navigate("ExtraScreen")}
                                    >
                                <Left>
                                    <Icon name="ios-thunderstorm-outline" style={styles.isize}/>
                                </Left>
                                <Body>
                                    <Text style={styles.ifsize}>Moments</Text>
                                </Body >
                                </ListItem>

                                <ListItem icon button noBorder style={{marginBottom:10}}
                                    onPress={() => this.props.navigation.navigate("ExtraScreen")}
                                >
                                <Left>
                                    <Icon name="md-copy" style={styles.isize}/>
                                </Left>
                                <Body>
                                    <Text style={styles.ifsize}>Highlights</Text>
                                </Body>
                                </ListItem>
                                
                            </List>
                
                
                       {/* List of items without icons of SideBar*/} 

                        <List>

                        {/*Making the list item to navigate to  a page on clicking by onPress function*/}

                       <ListItem button noBorder onPress={() => this.props.navigation.navigate("ExtraScreen")}>
                            <Text style={{fontSize:20}}>Settings and Privacy</Text>
                        </ListItem>

                        <ListItem button noBorder onPress={() => this.props.navigation.navigate("ExtraScreen")}>
                            <Text style={{fontSize:20}}>Help Center</Text>
                        </ListItem>

                        </List>
                        </Content>


                       {/* Footer with Icons of SideBar */}   

                 <Footer>
                        <FooterTab style={styles.footer}>
                        {/* Left side of the footer of SideBar */}  
                        <Left>
                        <Button transparent>
                        <Icon name='md-moon' style={styles.ficon}/>
                        </Button>
                        </Left>
                        {/* Right side of the footer of SideBar */}  
                        <Right>
                        <Button transparent>
                        <Icon name='md-barcode' style={styles.ficon}/>
                        </Button>
                        </Right>
                    </FooterTab>
                </Footer>   
                </Container>

                    

            );
        }

}
// all the styles required are written here
const styles= StyleSheet.create({
   
    footer:{
      backgroundColor:"white",
      borderColor:"gray",
      borderTopWidth:0.5, 
    },
    ficon:{
      color:"#2196F3",
    },
    isize:{
        fontSize:35,
        width:40,

    },
    ifsize:{
        fontSize:21, 
    }
});