import React from 'react'

function ButtonLink(props) {
    // props => {  }
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
          Novo Filme
        </a>
        
    );
}

export default ButtonLink;