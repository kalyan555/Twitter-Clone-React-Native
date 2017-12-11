import React from 'react';
import { Text,TextInput, View } from 'react-native';
import { Container,Title,Content, Left,Right,Body, Header,Item,Icon,Input,Button} from 'native-base';

import { StyleSheet} from 'react-native';

//The header component for the search page
const SearchHeader = (props) => {
  const {navigation} =props;

  return (
  
    <Header searchBar rounded marginTop={25} style={styles.Header}>
          <Item>
            <Button transparent>
            <Icon name="md-arrow-round-back" />
            </Button>
            <Input placeholder="Search" style={{fontSize:23,color:"#2196F3"}}/>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
  );
};
//Styles for the search page
const styles = StyleSheet.create({
    Header:{
      backgroundColor:"white",
      height:70,
    },
    title:{
      color:"#2196F3",
      fontSize:25,
    },
 
});


export default SearchHeader;