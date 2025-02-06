import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>Error page</h1>
      <button><Link to="/">HomePage</Link>Home </button>
    </div>
  )
}

export default ErrorPage
