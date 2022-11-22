import React from "react";

function BurgerItem(props) {
  return (
    <li className="list-group-item">
        <div>
        <img src={props.img} alt=""/>
        </div>
      <span>{props.info}</span> - <span className="text-secondary">{props.nomb}</span>
    </li>
  )
}

export { BurgerItem }