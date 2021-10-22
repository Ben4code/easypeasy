import React from 'react'
import Navbar from './Layouts/Navbar'

export default function Loading() {
    
    return (
        <div className="loading">
            <Navbar/>
            <span>
                <i className="fa fa-spinner fa-3x fa-spin"></i>
            </span>
        </div>
    )
}
