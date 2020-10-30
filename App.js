import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import axios from 'axios';
  
export default class App extends Component {
  
  state = {
    response: [],
    estado: false,
    value: ''
  }

  handlerText(texto){
    var campoTexto = texto;
    this.setState({value: campoTexto});
  }
  
  handlerButton = () => {
    var monster = this.state.value.split(" ").join("-").toLowerCase(); 
    console.log(monster);
    
    try {
      axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`)
      .then( response => {
        console.log(monster);
        console.log(response.data);
            this.setState({
              response: response.data,
              estado: true
            });
          })
          .catch(function(error) {
            console.log(error);
            alert('El monstruo no existe');
          });
      } catch (error) {
        console.log(err);
      }
  };



  render() {
    if(this.state.estado != true){
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./img/dungeons-dragons.png')}
          />
          <Text 
              style={styles.titulo}
              >Indicar Monstruo
          </Text>
          <Text 
              style={styles.ejemplos}
              >Disponibles: aboleth, acolyte, adult black dragon,
              {"\n"}giant elk, medusa, tribal warrior y nightmare             
          </Text>
          <TextInput 
              style={styles.input} name='monst' type='text' placeholder='Ej: tribal warrior'
              onChangeText={this.handlerText.bind(this)}>
          </TextInput>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Click me</Text> 
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./img/dungeons-dragons.png')}
          />
          <Text 
              style={styles.titulo}
              >Indicar Monstruo
          </Text>
          <Text 
              style={styles.ejemplos}
              >Disponibles: aboleth, acolyte, adult black dragon,
              {"\n"}giant elk, medusa, tribal warrior y nightmare             
          </Text>
          <TextInput 
              style={styles.input} name='monst' type='text' placeholder='Ej: tribal warrior'
              onChangeText={this.handlerText.bind(this)}>
          </TextInput>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Click me</Text> 
          </TouchableOpacity>
          <Text 
              style={styles.text}
              >Name: {this.state.response.name}
          </Text>
          <Text 
              style={styles.text}
              >Size: {this.state.response.size}
          </Text>
          <Text 
              style={styles.text}
              >Type: {this.state.response.type}
          </Text>
          <Text 
              style={styles.text}
              >Alignment: {this.state.response.alignment}
          </Text>
          <Text 
              style={styles.text}
              >Hit Points: {this.state.response.hit_points}
          </Text>
          <StatusBar style="auto" />
        </View>
      );
    }  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 16,
    margin: 3,
  },
  titulo: {
    color: "#bb0208",
    fontWeight: "bold",
    fontSize: 20,
  },
  ejemplos: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",
    margin: 5,
  },
  logo: {
    height: 100,
    width: 300,
    marginBottom: 40,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff9d23",
    padding: 10,
    margin: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  input: { 
    height: 40,
    width: 300,
    margin: 10,
    padding: 8,
    borderRadius: 10,	
    borderColor: '#ff9d23',
    backgroundColor: 'white', 
    borderWidth: 3, 
  }, 
});


