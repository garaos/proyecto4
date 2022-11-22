import React from "react";

function BurgerList(props) {
  return (
    <ul className="list-group">
      {props.children}
    </ul>
  )
}

export { BurgerList }