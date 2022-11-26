import React from "react";
import Card from 'react-bootstrap/Card';

function BurgerItem(props) {
  return (

        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt="" style={{width:'200px', height:'180px', alignSelf:'center'}} className="pt-2"/>
            <Card.Body>
              <Card.Title>{props.nomb}</Card.Title>
              <Card.Text>
                {props.info}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Text variant="primary">{props.precio}</Card.Text>
            </Card.Footer>
          </Card>
        </div>

  )
}

export { BurgerItem }