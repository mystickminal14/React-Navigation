import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const{name}=useParams()
   
  return (
    <div>
      <h1> this is  a great {name}</h1>
    </div>
  )
}
