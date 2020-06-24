import React,  { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { View, Container,Content, Header, Title, Body, Left, Right,  } from 'native-base';

export default class Frase extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,     
        datasource: {},
    }
}

componentDidMount(){
  return fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', {mode: "cors"})
  .then((response) => response.json())
  .then((responseJson) => {

    this.setState({
      isLoading: false,
      datasource: responseJson,
    })

  })
  .catch((error) =>{
    console.log(error)
  });

}

render(){

  const { route } = this.props;
  const { nombreInicio } = route.params;

  if (this.setState.isLoading) {    
    return(
    <View>
      <Text>Cargando frases...</Text>
    </View>
    )
  }else{

      return (
        <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Frases</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.nombreTitulo}>Bienvenido, 
        <Text style={styles.innerText}>  {JSON.stringify(nombreInicio).toUpperCase()}</Text>
        </Text>
        </View>
          <Text>"{this.state.datasource.quoteText}"</Text>
        <Text>Autor: {this.state.datasource.quoteAuthor}</Text>
        </Content>
       
      </Container>
    );
  }
}
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
  }
});