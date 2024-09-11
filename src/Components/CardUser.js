import React from 'react'
import Card from 'react-bootstrap/Card';
const CardUser = ({el}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name} {el.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.email}</Card.Subtitle>
        <Card.Text>
          {el.address.geo.lat}
          <br/>
          {el.phone}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardUser