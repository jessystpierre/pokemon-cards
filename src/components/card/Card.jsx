import React from 'react'
import './Card.css'
import Ability from '../ability/Ability'
import Image from '../image/Image'
import PokemonName from '../pokemon-name/PokemonName'
import { useState } from 'react'

const Card = (props) => {
    const classnames = ['card'];
    /* const abilityClassNames = []; */
    const [isActive, setIsActive] = useState("hidden");

    if (props.className) {
        classnames.push(props.className)
    }

    const onMouseEnter = () => {
        console.log('Mouse Enter');
        if (isActive === "hidden"){
            setIsActive("active");
        }
           
           
    }

    const onMouseLeave = () => {
        console.log('Mouse Leave');
        if (isActive === "active"){
            setIsActive("hidden");
        }

    }

    return (
        <div className={classnames.join(" ")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <PokemonName pokemonName={props.pokemonName}></PokemonName>
            <Image
                className="card-background"
                src={props.srcCard}
                alt="Card Background"
                width="420px"
                height="590px"
            />

            <Image
                className="pokemon-image"
                src={props.srcPokemonImage}
                alt={props.altPokemonImage}
                width="355px"
                height="240px"
            />
            <div className={"base-state " + isActive || "hidden"}>
                <Ability 
                    abilityName1={props.abilityName1}
                    abilityDmg1={props.abilityDmg1}
                    abilityName2={props.abilityName2}
                    abilityDmg2={props.abilityDmg2}
                ></Ability>
            </div>
            

        </div>
    )
}

export default Card

{/* <div className={classnames.join(" ")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <PokemonName pokemonName="Bulbasaur"></PokemonName>
            <Image
                className="card-background"
                src={CardBackground}
                alt="Card Background"
                width="420px"
                height="590px"
            />

            <Image
                className="pokemon-image"
                src={Bulbasaur}
                alt="Bulbasaur"
                width="355px"
                height=""
            />
            <div className={isActive || "hidden"}>
                <Ability 
                    abilityName1="Razor Leaf"
                    abilityDmg1="30"
                    abilityName2="Solar Beam"
                    abilityDmg2="60"
                ></Ability>
            </div> */}