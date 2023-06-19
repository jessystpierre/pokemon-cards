import React from 'react'
import './Text.css'
const Text = (props) => {
    const Component = props.as || "p";
    
    return (
        <Component className={props.className} >{props.children}</Component>
    )
}

export default Text