import React from "react";

function BebidaList(props) {
  return (
    <div className="container text-center pt-5">
        <div className="row">
        {props.children}
        </div>
    </div>
  )
}

export { BebidaList }