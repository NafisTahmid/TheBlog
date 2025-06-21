import React from 'react'
import NotFound from "../assets/images/page-not-found.jpg"
import { Link } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
const PageNotFound = () => {
  useTitle("Page Not Found")
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={NotFound} alt="Page not found" />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  )
}

export default PageNotFound
