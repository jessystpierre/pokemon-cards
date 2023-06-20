import React from 'react'
import './PokemonName.css'
import CardText from '../card-text/CardText'

const PokemonName = (props) => {
    const classnames = ['pokemon-name'];
    if (props.className) {
        classnames.push(props.className);
    }

    return (
        <div className={classnames.join(" ")}>
            <CardText as="h2">{props.pokemonName}</CardText>
        </div>
    )
}

export default PokemonName