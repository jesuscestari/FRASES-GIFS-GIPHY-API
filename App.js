import React,  { Component } from 'react';
import { ActivityIndicator } from "react-native";
import { View, Container,Content, Header, Title, Body, Left, Right,  } from 'native-base';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Giphy from './componentes/giphy';
import Frase from './componentes/frase';
import HomeScreen from './componentes/home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  } 

  async componentDidMount(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }


render(){

 const Stack = createStackNavigator();

  if (this.state.loading) {
    return <ActivityIndicator />;
  }
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Giphy" component={Giphy} options={{ title: 'GIFS' }} />
        <Stack.Screen name="Frases" component={Frase} options={{ title: 'Frases' }} />
      </Stack.Navigator>
    </NavigationContainer>
    )


  }
}

