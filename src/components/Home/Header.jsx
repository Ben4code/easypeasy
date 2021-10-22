import React from 'react'

export default function Header() {
    return (
        <div className="header" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('./images/img1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center'
        }}>
            <div className="header__content">
                <i className="fa fa-grav fa-2x logo"></i>
                <h1>People Ops at Quiva Games</h1>
                <p>Welcome to our world</p>
            </div>
        </div>
    )
}