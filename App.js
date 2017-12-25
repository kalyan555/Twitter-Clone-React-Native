import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import Expo from "expo";

//the main part of the project ,the entry point is the drawer navigator 
import DrawerContents from "./screen/DrawerNav";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  //for loading the custom fonts
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <DrawerContents />;
  }
}
