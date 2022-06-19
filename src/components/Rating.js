import React from 'react'
import { Card } from 'react-bootstrap'

function Rating({ data }) {
  console.log(data)
  return (
    <div>

      {data.map(d => (
        <>
          <Card>
            <Card.Body>
              <Card.Title> <h3 className="text-center">{d.name}</h3></Card.Title>
              <Card.Text> {d.comments}</Card.Text>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  )
}

export default Rating