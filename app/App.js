import React, {Fragment, useEffect, useState} from 'react';
import {
   ScrollView,
   FlatList
} from "react-native";

import { Cabecalho } from './src/Components/Cabeçalho';
import { Foto } from './src/Components/Foto';
import lerFotos from './src/Components/api/Feed';
import {Comentarios} from './src/Components/Comentarios'


const App = () => {
  
  const [fotos, setFotos] = useState([]);

  useEffect(()=> {

    lerFotos(setFotos);
  
  },[]);
  
  
  
  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
         renderItem={ ({item}) => 
          <Fragment>
            <Cabecalho 
            nomeUsuario={item.userName}
            urlImage={item.userURL}
            />
            <Foto 
              urlFoto={item.url}
              descricao={item.description} //descricao da foto
              qtdLikes={item.likes}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>}
      />
    </ScrollView>  
  )
};

export default App;
