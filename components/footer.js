import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, 
  Button, Left, Right, Body, Icon,
} from 'native-base';

import { StyleSheet,Text} from 'react-native';

/*The footer component that is used as the footer or all the screens of 
home, search, notifications,messages
*/
export default class Foot extends Component {

//commponents are created by footer,footer tab of the natve base
//footer has text on lext,icon on right

  render() {   

   return(
      
  
        <Footer>
              <FooterTab style={styles.footer}>
              <Button>
                <Text style={styles.footertext}>All</Text>
              </Button>
              <Button>
                <Text style={styles.footertext}>Mentions</Text>
              </Button>
              <Button>
                <Text></Text>
              </Button>
              <Button>
                <Text></Text>
              </Button>
              <Button transparent>
              <Icon name='settings' style={styles.ficon}/>
              </Button>
          </FooterTab>
        </Footer>

        
    
    );
  }
}

//Styles for the footer
const styles= StyleSheet.create({
        
        footertext:{
            fontSize:15,
            fontWeight:"400",
            color:"gray",
        },
        footer:{
          backgroundColor:"white",
          borderColor:"gray",
          borderTopWidth:0.5, 
        },
        
        ficon:{
          color:"#2196F3",
        },
       
});


