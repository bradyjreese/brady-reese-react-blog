import React from 'react';
import { CategoryRow } from '../blog';

export default function BlogDetail (props) {
    const {
        author,
        categories, 
        date, 
        description,
        image,
        title
    } = props.location.state.post;
    const imageStyle = {
        background: `url("${require(`../../../static/assets/images/${image}`)}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '35vh',
        marginTop: '-15px'
    }
    
    return (
        <div className='blog-detail-wraper'>
            <section className='blog-detail-image-wrapper' style={imageStyle}>
                <CategoryRow tags={categories} />
            </section>
            <section>
                {title}
            </section>
        </div>
    )
}