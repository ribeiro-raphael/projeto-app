 //Controla a quantidade de curtidas
 const curtirFoto = (curtiu, likes)=> {
    
    let qtd = likes;
    
    if(curtiu) {
      qtd--;
    }else {
      qtd++;
    }

    return [!curtiu, qtd];
  }

  //busca a imagem
  const imgLike = (curtiu) => {

    if (curtiu) {
     return require("../../../res/img/s2-checked.png")
    }

   return require("../../../res/img/s2.png")

  } 

  export {curtirFoto, imgLike}