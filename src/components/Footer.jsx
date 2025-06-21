import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; <Link to="/">Beet</Link> {date} All rights reserved</p>
    </footer>
  )
}

export default Footer
