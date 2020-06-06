/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Text,
   Image,
   ScrollView,
   Dimensions,
   StyleSheet,
   FlatList
  } from "react-native";


const largura = Dimensions.get("screen").width; //utilizando o Dimensions para deixar as imagens responsivas

const informacoes = [
  {usuario: "Raphael"},
  {usuario: "Maiara"},
  {usuario: "Maria"},
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
         renderItem={ ({item}) => 
          <Fragment>
            <Text>{item.usuario}</Text>
            <Image
              source={require('./res/img/alura.jpg')}
              style={estilo.imagem}
            />
          </Fragment>}
      />
    </ScrollView>  
  )
};

//Estilo
const estilo = StyleSheet.create({
  imagem:{
    width: largura,
    height: largura
  }
})


export default App;
