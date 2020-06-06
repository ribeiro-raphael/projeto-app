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
   ScrollView
  } from "react-native";


const App = () => {
  return (
    <ScrollView>
      <Text>Raphael</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={{
          height: 100,
          width: 100
        }}
      />
      <Text>Maiara</Text>
      <Image source={require('./res/img/alura.jpg')}/>
    </ScrollView>  
    
  )
};

export default App;
