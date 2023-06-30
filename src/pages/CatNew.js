import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const CatNew = ({createCat}) => {

  // we are using useNavigate hook to redirect our users
  const navigate = useNavigate()

  // initializing state with an object with the attributes with empty values
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  // console.log(newCat)

  const handleChange = (e) => {
    // setNewCat allows us to update state
    // spread operator to make a copy of the state object
    // e.target.name is telling us which key is being updated
    // e.target.value is telling us what value we are setting to that key
    setNewCat({...newCat,[e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    // sending the data to App.js
    createCat(newCat)
    // redirecting users to cat index
    navigate("/catindex")
  }

  return (
    <>
      <h2>Create a cat!</h2>
      <Form>
        <FormGroup>
          <Label for="cat-name">
            Cat Name
          </Label>
          <Input
            name="name"
            // Placeholder is what is visible until a user starts entering info
            placeholder="What is your name?"
            // the input type, can find more in reactstrap docs
            type="text"
            onChange={handleChange}
            value={newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-age">
            Cat Age
          </Label>
          <Input
            name="age"
            placeholder="What is your age?"
            type="number"
            onChange={handleChange}
            value={newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-enjoys">
            Cat Enjoys
          </Label>
          <Input
            name="enjoys"
            placeholder="What do you enjoy doing?"
            type="textarea"
            onChange={handleChange}
            value={newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-image">
            Cat Image URL
          </Label>
          <Input
            name="image"
            placeholder="Submit a pic"
            type="url"
            onChange={handleChange}
            value={newCat.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CatNew