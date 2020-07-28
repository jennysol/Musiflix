import React from 'react';
import Logo from '../../asserts/img/Logo.png';
import "./menu.css";
import Button from '../Button';
//import ButtonLink from "./components/ButtonLink";

function  Menu() {
    return (
        <nav className="Menu">
         <a href="/">
         <img className="Logo" src={Logo}  alt="Aluraflix logo"/>
         </a>
          
          <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
          </Button>
        </nav>
    );
}

export default Menu;