
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Headers from './components/Headers'
import About from './Pages/About'
import RestaurantsMenu from './components/RestaurantsMenu'
function App() {
  

  return (
    <>
      <Headers />
      
      <Routes>
        
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About />} />
        <Route path='/menu/:id' element={<RestaurantsMenu />}/>
        </Routes>
      <>
        
      </>
      {/*
    Header
        -Logo
        - Navbar
        CArt
    <body/>
      - SearchBAr
      - Restraunt LIST
        - Restruant Card
          -Image
          - Name
          - rating
          - cusions
      - 
      */}
  
    </>
  )
}

export default App
