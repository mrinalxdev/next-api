import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className = {styles.card}>

      <div className = {styles.headWrapper}>
        <h1> ✋ Welcome to DevMeets !</h1>
      </div>

      <p>This is the DevMeet's first prototype . While the 1st version is under development 🔥. Try its beta version and be the part of my project 😃.<br /> Join the way along with me to see this project grow  </p>

      <div className = {styles.btnWrapper}>
        <div className = {styles.btnOnly}> 
          <button>Join the Beta</button><br />
          <span>Have an Invite Text?</span>
          <Link to= "/login">Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Home