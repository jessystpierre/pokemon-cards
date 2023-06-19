import React from 'react'
import './Ability.css'
import CardText from '../card-text/CardText'

const Ability = (props) => {
    const classnames = ['ability-container'];

    if (props.className) {
        classnames.push(props.className);
    }

    return (
        <div className={classnames.join(" ")}>
            <CardText className="ability-Name" as="span">{props.abilityName}</CardText>
            <CardText className="ability-Dmg" as="span">{props.abilityDmg}</CardText>
        </div>
    )
}

export default Ability