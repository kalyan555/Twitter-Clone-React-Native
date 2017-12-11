
import React from 'react';
import SearchHeader from './searchc';
import CHeader from './headerc';
import {StyleSheet,Platform, Text, TouchableNativeFeedback, View,ScrollView, Animated } from 'react-native';
import {  Content,Header,Left,Body,Icon, Image,Right,Button,Title} from 'native-base';

//This component is the custom component for the Tab Bar
  
export default class TabBarCompo extends React.Component {

  // class is over ridden for the custom use
  constructor() {
    super();
    this.state = {
         tabstate:"",
    };
    this.onButtonPress = this.onButtonPress.bind(this);
};

onButtonPress(tabKey) {
/*we check to see which tab router is checked which is then used to change the header */

//Based on the tabkey we are able to distinguish the routers name
    if(tabKey=='SearchScreen'){
      this.setState({tabstate:"Search"});
    }
    else if(tabKey=='Home'){
      this.setState({tabstate:"Home"});
    }
    else if(tabKey=='Notificationscreen'){
      this.setState({tabstate:"Notification"});
    }
    else if(tabKey=='Messagescreen'){
      this.setState({tabstate:"Message"});
    }
}

render () {
  const {
    navigation,
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    jumpToIndex
    } = this.props;
    
    const {routes} = navigation.state;
    
  
  // initialy header is null later it is assigned a component
    let header=null;

    /* based of the tabstate we are cahnging the header content of the tabs with the help
      of the content present in the tabstate variable and then updating the header
    */
    if (this.state.tabstate=="Search") {
      header=<SearchHeader navigation={navigation}/>;
    } 
    else if  (this.state.tabstate=="Notification") {
      header=<CHeader name="Notifications" navigation={navigation}/>;
    }
    else if  (this.state.tabstate=="Message"){
      header=<CHeader name="Messages" navigation={navigation}/>;
    }
    else {
      header=<CHeader name="Home" navigation={navigation}/>;
    }
      

 return (
      
      <View>     
        {header}
      <View style={styles.tabbar}>

        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;
         
         const tabKey = route.key;
          return (
            
            <TouchableNativeFeedback
              key={route.key}
              style={styles.tab}
              onPress={()=>{jumpToIndex(index);  this.onButtonPress(tabKey)}}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            
              <View style={styles.tab}>
                {renderIcon({
                  route,
                  index,
                  focused,
                  tintColor
                })}
              </View>
            </TouchableNativeFeedback>
           );
          })}
        </View>
     </View>
    )
  }
};

// styles for the Tab bar components
const styles = StyleSheet.create({
    tabbar: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    tab: {
      alignSelf: 'stretch',
      flex: 1,
      borderBottomWidth:1,
      borderBottomColor: "#2196F3",
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    icon:{
     tintColor:'#2196F3',
        width: 26,
         height: 26
     },
  });

 
