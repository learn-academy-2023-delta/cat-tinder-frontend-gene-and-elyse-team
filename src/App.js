import {React, useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import mockCats from './mockCats'
import "./App.css"

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    // fetch is calling on the endpoint url we wish to communicate to (default is a GET request)
    fetch("http://localhost:3000/cats")
    // using .then to check the promise that fetch gives.  We then need to parse to json so that our payload is available in the next step
    .then((response) => response.json())
    // Once we get the response parsed we can update our state variable to the payload
    .then((payload) => setCats(payload))
    // If promise is rejected we want to catch and console log the error
    .catch((errors) => console.log("Cat read errors:", errors))
  }



  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      // convert object to string that can be passed in the request
      body: JSON.stringify(cat),
      // specify info is sent in JSON and should be returned as JSON
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("Cat create errors:", errors))
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />}/>
        <Route path="/catshow/:id" element={<CatShow cats={cats} />}/>
        <Route path="/catnew" element={<CatNew createCat={createCat}/>}/>
        <Route path="/catedit" element={<CatEdit />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App