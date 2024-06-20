import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './login'
import Lead from './Lead/Lead'
import AButton from './AButton'
import RequireAuth from './private/RequireAuth'
import ReactHook from './ReactHook'
import ABC from './ABC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <ul>

        <li>
          <Link to='/' >Login</Link>
        </li>

        <li>
        <Link to='/lead' >Lead</Link>
          
        </li>

      </ul>

      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/react1' element={<ABC/>}>

          <Route path='default' element={<ReactHook></ReactHook>}></Route>

        </Route>
        <Route path='/lead' element={ <RequireAuth> <Lead/></RequireAuth>} />
        
      </Routes>
    </>
  )
}

export default App
