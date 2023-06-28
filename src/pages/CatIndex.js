import React from 'react'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'

const CatIndex = ({cats}) => {

  return (
    <>
      <h1 className='index-header'>Find Your Purrrfect Meow Mate!</h1>
      <div className='card-flex'>
        {cats.map((cat, index) => {
          return (
            <Card
              key={index}
              style={{
                width: '18rem'
              }}
            >
              <img
                alt={cat.name}
                src={cat.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {cat.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {cat.age}
                </CardSubtitle>
                <Button>
                  <NavLink to={`/catshow/${cat.id}`}>More About Me</NavLink>
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default CatIndex