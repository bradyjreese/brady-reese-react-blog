import React from 'react'
import { categoryColors } from './styles';

export default function CategoryRow ({tags}) {
    return (
        <div className='category-tags'>
            { tags.map((category, index) =>
                <span
                    key={index}
                    className='category'
                    style={{backgroundColor: categoryColors[category]}}
                >
                    {category.toUpperCase()}
                </span>
            )}
        </div>
    )
}