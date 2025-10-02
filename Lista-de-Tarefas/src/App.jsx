// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'react'
import './App.css'
import Login from './assets/Pages/Login'
import Home from './assets/pages/Home'
import { Route, Routes } from 'react-router-dom'
// import './Login.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </>
  )
}

export default App
