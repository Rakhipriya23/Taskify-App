import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center '>
            Achieve balance: <br/>One place for all your tasks and commitments.
            </h1>
            <p>
            "Welcome to your ultimate productivity tool! Our to-do list app is designed to help you organize your work and personal life effortlessly. With intuitive features and a user-friendly interface, you can prioritize tasks, set reminders, and stay on track with ease. </p>
            <button className='home-btn p-2'>Make Todo List</button>
        </div>
      
    </div>
  )
}

export default Home
