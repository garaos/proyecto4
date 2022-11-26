import React from "react";

function BurgerList(props) {
  return (
    <div className="container text-center pt-2">
    <div className="row">
    {props.children}
    </div>
</div>
  )
}

export { BurgerList }