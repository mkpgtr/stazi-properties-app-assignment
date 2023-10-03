import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardGrid, Navbar, PropertyHeader, SingleProperty } from './components'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useSelector } from 'react-redux'



function App() {
  const {isLoading} = useSelector(state=>state.cars)
  


  return (
    <BrowserRouter>
   <PropertyHeader />
   <Routes>

    <Route path='/' element={<CardGrid />}/>
    <Route path='/page/:pageNumber' element={<CardGrid />}/>
    <Route path='/property/:id' element={<SingleProperty />}/>
   </Routes>



    </BrowserRouter>
  )
}

export default App
