import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/about/About'
import Signin from './components/Signup/Signin'
import Signup from './components/Signup/Signup'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Todo from './components/todo/Todo'
import TodoCards from './components/todo/TodoCards'
import {useDispatch} from 'react-redux';
import { authActions } from './store';


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
   const id= sessionStorage.getItem("id"); 
   if(id){
    dispatch(authActions.login())
   }

  },
[])
  return (
    <>
    

      <Router>
      <Navbar/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/signin' element={<Signin/>}/>
          <Route  path='/signup' element={<Signup/>}/>

          <Route  path='/todo' element={<Todo/>}/>


        </Routes>
      </Router>
      
      <Footer/>
    </>
  )
}

export default App
