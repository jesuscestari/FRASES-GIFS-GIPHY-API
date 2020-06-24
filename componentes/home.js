import React,  { Component } from 'react';
import { Text, TextInput, Button, StyleSheet  } from 'react-native';
import { View, Container, Content } from 'native-base';


export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: ''
    }


  }


render(){
    const { navigation } = this.props;
    
    return(

        <Container style={{ alignItems: 'center',  justifyContent: 'center' }}>
        <Content>
        <Text style={styles.titulo}>USO DE APIS</Text>
        <TextInput style={{height:50, width:200, backgroundColor:"lightgrey"}} placeholder="Escribe tu nombre"
        onChangeText={nombre => this.setState({nombre})}>
        </TextInput>

         <Button title="BUSCAR GIFS" onPress={() =>  {          
          navigation.navigate('Giphy', {
            nombreInicio: this.state.nombre,
          });   
        }}       
          />
             
            <Button title="GENERAR FRASE" onPress={() =>  {          
          navigation.navigate('Frases', {
            nombreInicio: this.state.nombre,
          });   
        }}       
          />
          </Content>
          </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: '1.5em',
    paddingBottom:'15px',
    textAlign:'center',
    margin: '0 0 24px',
    fontWeight: '800',
    lineHeight: '72px'
  },
});
