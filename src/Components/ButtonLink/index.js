import React from 'react'
import { Link } from 'react-router-dom';

function ButtonLink(props) {
    // props => {  }
    console.log(props)
    return (
        <Link to={props.href} className={props.className}>
          Novo Filme
        </Link>
        
    );
}

export default ButtonLink;