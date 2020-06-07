import React, {Fragment} from 'react';
import estilo from "./estilo"
import {
    Text,
    Image,
    View
} from "react-native";


const Cabecalho = ({nomeUsuario}) => {
    return (
        <View style={estilo.cabecalho}>
            <Image source={require("../../../res/img/alura.jpg")}
                   style={estilo.fotoUsuario}
            />
            <Text>{nomeUsuario}</Text>
        </View>
    )}

export default Cabecalho;