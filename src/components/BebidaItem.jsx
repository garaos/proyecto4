import React from "react";
import Card from 'react-bootstrap/Card';

function BebidaItem(props) {
  return (
 

        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt=""/>
            <Card.Body>
              <Card.Title>{props.nomb}</Card.Title>
              <Card.Text>
                {props.info}
              </Card.Text>
              <Card.Text variant="primary">$ {props.precio}</Card.Text>
            </Card.Body>
          </Card>
        </div>

  
  )
}

export { BebidaItem }