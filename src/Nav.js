import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="nav-bar">
            <Link to='About' className="link">About</Link>
            <Link to='Projects' className="link">Projects</Link>
            <Link to='Resume' className="link">Resume</Link>
            <Link to='Contact' className="link">Contact</Link>
        </nav>
    )
}