import React from 'react';
import Logo from '../../Assets/Imagens/Logo.png'
import './menu.css'
import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Guiflix" />
            </a> 

        <ButtonLink className="ButtonLink" href="https://www.youtube.com/watch?v=xODKREoGjxI">
          Novo Filme
        </ButtonLink>
        </nav>
    );
}

export default Menu;