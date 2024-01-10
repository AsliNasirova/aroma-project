import { useState } from 'react'
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Mainlayout from './Layout/MainLayout/mainlayout'
import Home from './Pages/Home/home'
import Blog from './Pages/Blog/blog'
import Contact from './Pages/Contact/contact'
import Shop from './Pages/Shop/shop'
import Pages from './Pages/PagesPage/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Mainlayout/>}>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/pages' element={<Pages/>}></Route>
        </Route>
      </Routes>    
    </>
  )
}

export default App
