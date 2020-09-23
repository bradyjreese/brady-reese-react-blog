import React from 'react';
import { CategoryRow } from './';

export default function BlogPost ({ post, categoryTag }) {
    const screenWidth = window.innerWidth
    const imageBackground = {backgroundImage: `url("${require(`../../../static/assets/images/${post.image}`)}")`}

    const style = screenWidth > 900 ? {...imageBackground, ...post.style} : imageBackground

    return(
        <a className='blog-post overlay' style={style} href={post.link}>
            <div className='image-text' style={{justifyContent: categoryTag ? 'space-between' : 'flex-end'}}>
                <CategoryRow tags={post.categories} />
                <div>
                    <h2 className='image-title'>{post.title}</h2>
                    <span className='image-date'>{post.date}</span>
                </div>
            </div>
        </a>
    )
}