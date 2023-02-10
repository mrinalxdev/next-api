import React, {useState, useEffect} from 'react'
import Link from "next/link";

import { getCategories } from '../services'

const Categories = () => {

  const [ categories, setCategories ] = useState([])  

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div>Categories</div>
  )
}

export default Categories