import React from 'react';
import Logo from '../../Assets/Imagens/Logo.png'
import './menu.css'
import ButtonLink from '../ButtonLink';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link  to="/">
                <img className="Logo" src={Logo} alt="Guiflix" />
            </Link> 

        <ButtonLink className="ButtonLink" href="/cadastro/video">
          Novo Filme
        </ButtonLink>
        </nav>
    );
}

export default Menu;