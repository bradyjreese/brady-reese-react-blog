import React from 'react';
import loginPicture from '../../../static/assets/images/login.jpg'

export default function Login () {
    return (
        <section className='content-page-wrapper'>
            <div className='content-info-wrapper'>
                <h1>LOGIN/SIGNUP</h1>
                <input />
                <input />
            </div>
            <div
                className='picture-wrapper'
                style={{
                    background: "url(" + loginPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}    
            />
        </section>
    )
}