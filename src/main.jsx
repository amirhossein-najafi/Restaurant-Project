import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Login from "./components/Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path='/' element={<App/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/menu' element={<Menu/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
          </Routes>
      </Router>

  </React.StrictMode>,
)
