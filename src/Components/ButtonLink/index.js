import React from 'react'

function ButtonLink(props) {
    // props => {  }
    console.log(props)
    return (
        <a href={props.href} target="_blank" className={props.className}>
          Novo Filme
        </a>
        
    );
}

export default ButtonLink;