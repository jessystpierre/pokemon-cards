import React from 'react'
import './Card.css'
import CardText from '../card-text/CardText'
import Ability from '../ability/Ability'
import Image from '../image/Image'
import Bulbasaur from '../../assets/bulbasaur.png'
import CardBackground from '../../assets/background-card.png'

const Card = (props) => {
    const classnames = ['card']

    if (props.className) {
        classnames.push(props.className)
    }

    const onMouseEnter = () => {
        console.log('Mouse Enter')
    }

    const onMouseLeave = () => {
        console.log('Mouse Leave')
    }

    return (
        <div className={classnames.join(" ")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Image
                className="card-background"
                src={CardBackground}
                alt="Card Background"
                width="420px"
                height="590px"
            />

            <Image
                className="bulbasaur"
                src={Bulbasaur}
                alt="Bulbasaur"
                width="355px"
                height=""
            />
            <Ability abilityName="Razor Leaf" abilityDmg="30"></Ability>
            <CardText className="" as="">Bulbasaur</CardText>

        </div>
    )
}

export default Card