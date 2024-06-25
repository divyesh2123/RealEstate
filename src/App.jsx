import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Login from './login'
import Lead from './Lead/Lead'
import AButton from './AButton'
import RequireAuth from './private/RequireAuth'
import ReactHook from './ReactHook'
import ABC from './ABC'
import MyRoutes from './MyRoutes'
import CustComLink from './CustComLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <ul>

        <li>
          <CustComLink to='/' >Login</CustComLink>
        </li>

        <li>
        <CustComLink to='/lead' >Lead</CustComLink>
          
        </li>
        <li>
          <CustComLink
            to="/react1/default/1"
         
          >MyPage
            </CustComLink>
          </li>

      </ul>

      <MyRoutes/>

      {/* <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/react1' element={<ABC/>}>

          <Route path='default' element={<ReactHook></ReactHook>}></Route>

        </Route>
        <Route path='/lead' element={ <RequireAuth> <Lead/></RequireAuth>} />
        
      </Routes> */}
    </>
  )
}

export default App
