import React from 'react';
import contactPicture from '../../../static/assets/images/brady.jpg'

export default function ContactMe () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='picture-wrapper'
                style={{
                    background: "url(" + contactPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}    
            />
            <div className='content-info-wrapper'>

            </div>
            
        </div>
    )
}