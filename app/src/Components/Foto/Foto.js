import React, {Fragment, useState} from 'react';
import {
   Image,
   Text,
   TouchableOpacity,
   View
} from "react-native";
import estilo from './estilo'
import { imgLike, curtirFoto} from '../api/Curtidas'


const Foto = ({urlFoto, descricao, qtdLikes}) => {

  //estados da imagem e  quantidade de Curtidas
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);

  const clicouCurtir = ()=> {
    const [novoEstadoCurtiu, qtd] =  curtirFoto(curtiu, likes)
    setLikes(qtd)
    setCurtiu(novoEstadoCurtiu)
  }

  //display
  return (
    <Fragment>
        <Image
              source={{uri: urlFoto}}
              style={estilo.imagem}
        />
        <Text>{descricao}</Text>
        <View style={estilo.viewLike}>
          <TouchableOpacity onPress={clicouCurtir}>
            <Image
              source={imgLike(curtiu)} //imagem do like da page
              style={estilo.imgLike} //estilo do like da page
            />
          </TouchableOpacity>
          <Text>Curtidas {likes}</Text>
        </View>
    </Fragment>
  )
}; 

export default Foto
