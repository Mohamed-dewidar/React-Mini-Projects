import React from 'react'
import { Button, Card } from 'react-bootstrap'

export  function ItemCard(props) {
    
    let {item} = props
  return (
    <Card className={'col-sm-12 col-md-6 col-3 p-2 m-0'} style={{ width: '18rem' }} >
      <Card.Img variant="top" src={item.src} style={{height: '150px', objectFit: 'contain'}}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            {item.desc}
        </Card.Text>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
  )
}
