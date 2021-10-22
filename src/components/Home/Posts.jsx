import React from 'react'
import {posts} from '../../data'
import Card from './Card'

export default function Posts() {
    return (
        <div className="posts"> 
            {posts.map(post => <Card key={post.slug} post={post}/>)}
        </div>
    )
}
