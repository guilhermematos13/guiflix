import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/watch?v=XfxIQ30txiU">
        <img height="120" style={{borderRadius:'100%'}} src="https://pbs.twimg.com/profile_images/1169601681270726657/je18KVJj_400x400.jpg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a pandemia por GUIZAO, vulgo "O BRABO"
      </p>
    </FooterBase>
  );
}

export default Footer;
