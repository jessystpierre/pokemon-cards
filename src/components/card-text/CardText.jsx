import React from 'react'
import './CardText.css'
import Text from '../text/Text';

const CardText = (props) => {
  const classnames = ['card-text'];
  const asProps = ['p', 'span', 'div', 'strong', 'em', 'small', 's', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  if (props.className) {
    classnames.push(props.className);
  }

  if (props.as && !asProps.includes(props.as)) {
    throw new Error(
      `Invalid prop 'as' of value '${props.as}' supplied to 'CardText', expected one of ${asProps.join(", ")}.`
    );
  }
  return (      
    <Text className={classnames.join(" ")} as={props.as || "p"}>
      {props.children}
    </Text>
  )
}

export default CardText