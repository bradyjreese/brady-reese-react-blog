import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { CategoryRow } from './';

export default function BlogGrid ({posts}) {
    const [pageSize, setPageSize] = useState(9)
    const [current, setCurrent] = useState(1)

    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize])

    // useEffect(() => {
    //     window.scroll({
    //         top: 500,
    //         left: 0,
    //         behavior: 'smooth'
    //     })
    // })

    return (
        <section className='blog-grid-wrapper'>
            <section className='post-grid wrapper'>
                {paginatedPosts.map((post, index) => (
                    <div key={index} className='post-wrapper'>
                        <figure>
                            {/* TODO Change link */}
                            <Link to={{
                                pathname:'/blog-detail',
                                state: {post}
                            }}>
                                <img src={require(`../../../static/assets/images/${post.image}`)} alt={post.image} />
                            </Link>
                        </figure>
                        <CategoryRow tags={post.categories} />
                        <h2>{post.title}</h2>
                        <p className='author-text'>
                            <span>
                                By: 
                                <Link to={`authors/${post.author}`}>{post.author}</Link>
                            </span>
                            <span>
                                - {post.date}
                            </span>
                        </p>
                        <p className='description-text'>
                            {post.description}
                        </p>
                        <Link to={{
                            pathname:'/blog-detail',
                            state: {post}
                        }}>
                            Read More...
                        </Link>
                    </div>
                ))}
            </section>
            <Pagination
                simple
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize}
                total={posts.length}
                defaultCurrent={current}
                onChange={setCurrent}
                // TODO fix scrolling on pagination
            />
        </section>
    )
}