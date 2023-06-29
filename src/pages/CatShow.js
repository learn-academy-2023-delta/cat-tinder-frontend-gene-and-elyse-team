import { render } from '@testing-library/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'

const CatShow = ({cats}) => {
  const { id } = useParams()
  let selectedCat = cats?.find(cat => cat.id === +id) 
  return (
    <div className='cat-show-align'>
      {selectedCat && (
        <Card
        className='cat-show'
        style={{
          width: '40%'
        }}
      >
        <img
          alt={selectedCat.name}
          src={selectedCat.image}
          style={{
          }}
        />
        <CardBody>
          <CardTitle tag="h5">
            {selectedCat.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Age: {selectedCat.age}
          </CardSubtitle>
          <CardText>
            I enjoy {selectedCat.enjoys}
          </CardText>
        </CardBody>
      </Card>
      )}
    </div>
  )
}

export default CatShow