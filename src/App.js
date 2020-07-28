import React from 'react';
import Menu from './Components/Menu'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './Components/BannerMain'
import Footer from './Components/Footer'
import Carousel from './Components/Carousel'

function App() {
  return (
    <div>
      <Menu /> 
      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Leonhart o GRANDE INSANE GAMEPLAY XAYAH MECHANICS FOR WORLD MY FRIEND."}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      /> 
      <Carousel
      
      category={dadosIniciais.categorias[1]}
      />
           <Footer/>

    </div>
  );
}

export default App;
