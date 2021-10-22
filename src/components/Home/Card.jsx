import React from 'react'
import { Link } from 'react-router-dom';


export default function Card({ post }) {
    const { title, imgSrc, category, duration, content, cardWidth } = post
    return (
        <div className={`card ${cardWidth === '0.5' ? 'card__half' : ''}`}>
            <Link to={`/${post.slug}`}>
            <div className={`
                ${cardWidth === '1' ? 'card__full' : ''} 
                ${cardWidth === '0.3' ? 'card__three' : ''} 
            `}>
                <img src={imgSrc} alt={title} />
                <div className="card__body">
                    <div className="card__content">
                        <span>{category}</span>
                        <h2>{title}</h2>
                        <p>{truncate(content, 200)}</p>
                    </div>
                    <div className="card__footer">
                        <i className="fa fa-grav logo"></i>
                        <span>{duration} min read</span>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

function truncate(myString, length) {
    return myString.substring(0, length);
}