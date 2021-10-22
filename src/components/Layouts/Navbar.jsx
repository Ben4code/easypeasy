import React from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Navbar() {
    let { slug } = useParams(); 
    
    return (
        <div className={`navbar ${slug ? 'navbar__blog' : ''}`}>
            <div className="container">
                <div className="navbar__content">
                    <ul className="navbar__group">
                        <li><Link to="/"><i className="fa fa-grav logo"></i></Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/hiring">Hiring</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/travel">Travel</Link></li>
                        <li><Link to="/finance">Finance</Link></li>
                    </ul>
                    <ul className="socials">
                        <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-rss"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
