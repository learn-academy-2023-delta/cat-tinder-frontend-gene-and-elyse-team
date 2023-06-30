import {React, useState} from 'react'
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
  const [cats, setCats] = useState(mockCats)

  const createCat = (cat) => {
    console.log("Created cat", cat)
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