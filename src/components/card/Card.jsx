import React from 'react'
import './Card.css';
const Card=(props)=>{
    return (
    <span className="crm-card">
      <span style={{backgroundColor: `${props.bgColor}`}}>
          <img className={props.className} src={props.cardImg}/>
      </span>  
      <span>
          <p>{props.cardName}</p>
          <p>{props.views}</p>
      </span>
    </span>
    );

}
export default Card;