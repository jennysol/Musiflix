import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div  style={{ background: "#414141"}}>
     <Menu/>


    <BannerMain
    videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
    url={dadosIniciais.categorias[0].videos[0].url}
    videosDescription={"Holocene - Bon Iver"}
    />

    <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
    />
    
    </div>
  );
}

export default App;
