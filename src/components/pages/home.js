import React from 'react';
import { BlogLayout, BlogPost, BlogGrid } from '../blog';
import popular from '../../../static/assets/data/test-popular';
import newposts from '../../../static/assets/data/test-new';

const popularDisplay = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const newDisplay = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }
}

const compileStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Brady Reese'
        post.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    })
}

const newestPosts = [...popular, ...newposts, ...newposts]

compileStyles(popular, popularDisplay)
compileStyles(newposts, newDisplay)

const newestPost = newposts.pop();

export default function Home () {
    return (
        <main className='home'>
            <section className='container'>
                <div className='row'>
                    <section className='new-posts-wrapper'>
                        <BlogLayout posts={newposts} columns={2} categoryTag={true} />
                        <BlogPost post={newestPost} categoryTag={true} />
                    </section>
                </div>
            </section>

            <section className='pg-bg-color'>
                <section className='container'>
                    <div className='row'>
                        <h1>Newest</h1>
                        <BlogGrid posts={newestPosts} />
                    </div>
                </section>
            </section>

            <section className='container'>
                <div className='row'>
                    <BlogLayout posts={popular} columns={3} />
                </div>
            </section>
        </main>
    )
}