import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryRow } from './';

export default function BlogPost ({ post, categoryTag }) {
    const screenWidth = window.innerWidth
    const imageBackground = {backgroundImage: `url("${require(`../../../static/assets/images/${post.image}`)}")`}

    const style = screenWidth > 900 ? {...imageBackground, ...post.style} : imageBackground

    return(
        <Link
            to={{
                pathname:'/blog-detail',
                state: {post}
            }}
            className='blog-post overlay'
            style={style}
        >
            <div className='image-text' style={{justifyContent: categoryTag ? 'space-between' : 'flex-end'}}>
                <CategoryRow tags={post.categories} />
                <div>
                    <h2 className='image-title'>{post.title}</h2>
                    <span className='image-date'>{post.date}</span>
                </div>
            </div>
        </Link>
    )
}