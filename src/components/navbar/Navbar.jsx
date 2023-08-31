"use client"

import Link from 'next/link'
import React from 'react'
import { links } from '@/constants/constant'

const Navbar = () => {
  return (
    <div>
        <Link href="/">DevBlogs</Link>
        <div>
          {links.map(link => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          ))}
          <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar