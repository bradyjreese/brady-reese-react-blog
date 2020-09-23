import React from 'react';
import { BlogPost } from './';

export default function BlogLayout ({ posts, columns, categoryTag }) {
    return (
        <section
            className='blog-layout'
            style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}
        >
            { posts.map((post, index) => 
                <BlogPost {...{post, index, categoryTag, key: index}} />
            )}
        </section>
    )
}