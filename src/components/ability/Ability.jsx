import React from 'react'
import './Ability.css'
import CardText from '../card-text/CardText'

const Ability = (props) => {
    const classnames = ['ability-container'];

    if (props.className) {
        classnames.push(props.className);
    }

    return (
        <div className='ability-container-parent'>
            <div className={classnames.join(" ")}>
                <CardText className="ability-Name1" as="span">{props.abilityName1}</CardText>
                <CardText className="ability-Dmg1" as="span">{props.abilityDmg1}</CardText>
            </div>
            <div className={classnames.join(" ")}>
                <CardText className="ability-Name2" as="span">{props.abilityName2}</CardText>
                <CardText className="ability-Dmg2" as="span">{props.abilityDmg2}</CardText>
            </div>
        </div>

        
    )
}

export default Ability