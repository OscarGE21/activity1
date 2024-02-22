import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';
import { useState } from 'react';

function App() {
  const [contador, setContador]=useState(0);
  return (
    // Declaramos un nuevo estado de contador

    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        instagram='https://www.instagram.com/mouredev/'
        youtube='https://www.linkedin.com/in/braismoure/'
        twitch='https://www.twitch.tv/mouredev'
      />
      <h2></h2>
      <Perfil
        nombre='valmosdev'
        pais='Colombia'
        imagen='valmosdev'
        cargo='Ingeniero de sistemas'
        perfil='Es un ingeniero de sistemas el cual comparte información sobre temas de programación'
        instagram='https://www.instagram.com/valmos_dev/'
        youtube='https://www.youtube.com/@valmoshf'
        twitch='https://www.twitch.tv/hugovalmos/home'
      />
      <h3></h3>
      <Perfil
        nombre='serudda'
        pais='Colombia'
        imagen='serudda'
        cargo='UX Engineer (Front del Front)'
        perfil='Es un ingeniero, programador y desarrollador de sistemas y aplicaciones varias'
        instagram='https://www.instagram.com/serudda/'
        youtube='https://www.youtube.com/@serudda'
        twitch='https://www.twitch.tv/serudda'
      />
      {/* Implementacion de un contador */}
      <p>Has hecho click {contador} veces</p>
      <button onClick={()=>setContador(contador+1)}>
        Haz click aqui
      </button>
      <button onClick={()=>setContador(contador-1)}>
        Haz click aqui
      </button>
     </div>
    </div>
  );
}

export default App;
