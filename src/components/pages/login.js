import React from 'react';
import loginPicture from '../../../static/assets/images/login.jpg'

export default function Login () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='picture-wrapper'
                style={{
                    background: "url(" + loginPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}    
            />
            <div className='content-info-wrapper'>

            </div>
            
        </div>
    )
}