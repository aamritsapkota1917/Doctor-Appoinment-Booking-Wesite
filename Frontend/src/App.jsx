import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Myappoinment from './pages/Myappoinment'
import Myprofile from './pages/Myprofile'
import Appoinment from './pages/Appoinment'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      
      <Navbar/>

  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/doctors' element={<Doctors/>}/>
<Route path='/doctors/:speciality' element={<Doctors/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Myprofile' element={<Myprofile/>}/>
<Route path='/Myappoinment' element={<Myappoinment/>}/>
<Route path='/Appoinment/:docID' element={<Appoinment/>}/>

  </Routes>
<Footer/>

    </div>
  )
}

export default App