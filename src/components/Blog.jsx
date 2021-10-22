import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {posts} from '../data'
import Navbar from './Layouts/Navbar';
import Loading from './Loading';

export default function Blog() {
    const [post, setPost] = useState(null)
    let { slug } = useParams(); 

    useEffect(()=>{
       function fetchBlog (){
           return posts.filter(post => post.slug === slug)[0]
       } 
       setPost(fetchBlog)
    },[slug])

    if(!post){
        return (<Loading />)
    }
    
    const { title, imgSrc, category, content } = post

    return (
        <div className="blog">
            <Navbar/>
            <div className="blog__body">
                <span>22 Oct 2021 / {category}</span>
                <h2>{title}</h2>
                <img src={imgSrc} alt={title} />
            </div>
                <div className="blog__content">
                    <p>{content}</p>
                </div>
        </div>
    )
}
