import React from 'react'
import { Header } from './'

const Layout = ({children}) => {
  return (
    <div>
        <Header></Header>
        {children}
    </div>
  )
}

export default Layout