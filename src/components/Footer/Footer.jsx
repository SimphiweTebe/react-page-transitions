import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
        <div className="content">
            <Link to="/">Find Us</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Faqs</Link>
            <Link to="/">Modern Slavery Statement</Link>
        </div>
    </footer>
  )
}

export default Footer