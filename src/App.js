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
      videoDescription={"O que é Front-end? Trabalhando na área"}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      /> 
      <Carousel
      
      category={dadosIniciais.categorias[1]}
      /> 
      <Carousel
      
      category={dadosIniciais.categorias[2]}
      /> 
      <Carousel
      
      category={dadosIniciais.categorias[3]}
      /> 
           <Footer/>

    </div>
  );
}

export default App;
