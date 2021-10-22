import React from 'react'
import Navbar from '../Layouts/Navbar'
import Header from './Header'
import Posts from './Posts'

export default function Index() {
    return (
        <div className="header">
            <Navbar/>
            <Header />
            <div className="home">
                <div className="container">
                    <div className="posts">
                        <Posts />
                    </div>
                </div>

            </div>
        </div>
    )
}
