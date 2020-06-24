import React,  { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, Alert, Button} from 'react-native';
import { View, Container,Content, Header, Title, Body, Left, Right, Thumbnail } from 'native-base';


export default class Giphy extends Component {
    constructor(props) {
      super(props);
      this.state = {   
        imagenes: [],
        TextInputValueHolder: ''       
      }
  }


  componentDidUpdate(){  
    return fetch('https://api.giphy.com/v1/gifs/search?api_key=AbA6AqKZUFSNTcJoOMGeQT3lEyP09610&q='+ this.state.TextInputValueHolder +'&limit=10&offset=0&rating=G&lang=en') 
    .then((response) => response.json())
    .then((respuestaJson ) => {

      this.setState({
        imagenes: respuestaJson.data    //data (el array de objetos Json)
      })
      
    })
    .catch((error) =>{
      console.log(error)
    });
  
  }

  render(){   
    const { route } = this.props;
    const { nombreInicio } = route.params;
    return ( 
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>GIPHY</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.nombreTitulo}>Bienvenido, 
        <Text style={styles.innerText}>  {JSON.stringify(nombreInicio).toUpperCase()}</Text>
        </Text>
        <TextInput style={{height:50, width:200, backgroundColor:"lightgrey"}} placeholder="Buscar imagenes"
        onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})}>
        </TextInput>
        </View>
      <View>
   
        {this.state.imagenes.map(imagen  => ( 
          //imagen como key y id para que sea unica cada imagen
          <Content key={imagen.id}>           
           <Image source={imagen.images.downsized.url} style={{width: 150, height: 150}}/>
           </Content>
        ))}
        </View>
        


        </Content>
       
      </Container>
      
    )}
}

const styles = StyleSheet.create({
  nombreTitulo: {
    fontWeight: 'bold',
    fontSize: '1.5em',
    paddingBottom:'15px',
    textAlign:'center',
    margin: '0 0 24px',
    fontWeight: '800',
    lineHeight: '72px'
  },
  innerText: {
    color: 'red'
  },
});