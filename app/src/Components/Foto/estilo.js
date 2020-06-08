import { 
    Dimensions,
    StyleSheet,
    Fragment
 } from "react-native";

const largura = Dimensions.get("screen").width; //utilizando o Dimensions para deixar as imagens responsivas

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura
    } ,

    imgLike: {
        width: 50,
        height: 50,
        margin: 5
    } ,

    viewLike: {
        alignItems: "center",
        flexDirection: "row"
    }
})

export default estilo;