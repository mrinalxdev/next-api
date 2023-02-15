import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.css'


const Navigation = () => {

  const logoStyle = {
    color : '#fff',
    textDecoration: 'none',
    fontSize : '25px',
    fontWeight : '700',
    display : 'flex', 
    alignItems : 'center'
  }

  return (
    <nav className = {`${styles.navbar} container`} >
      <Link style={logoStyle} to = "/">
        <span>💻 DevMeets</span>
      </Link>
    </nav>
  )
}

export default Navigation