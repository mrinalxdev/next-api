import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className = {styles.card}>

      <div className = {styles.headWrapper}>
        <span>✋</span>
        <h1>Welcome to DevMeets !</h1>
      </div>

      <p>This is the DevMeet's first prototype . While the 1st version is under development 🔥. Try its beta version and be the part of my project 😃 </p>

      <div>
        <button> 🤗 Join the Beta</button>
        <span>Have an Invite Text?</span>
        <Link to= "/login">Sign In</Link>
      </div>
    </div>
  )
}

export default Home