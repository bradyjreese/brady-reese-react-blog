import React from 'react';
import contactPicture from '../../../static/assets/images/brady.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactMe () {
    return (
        <div className='content-page-wrapper'>
            <div className='contact-info-wrapper'>
                <div className='contact-bio'>
                    <FontAwesomeIcon icon='info' style={{color: '#2997ff', fontSize: '24px'}} />
                    <div className='text-bio'>
                        <p>Hello! My name is Brady James Reese. I'm a Junior Software Developer</p>
                        <p>I built this blog site in React as my Bottega Capstone.</p>
                        <p>I have experience with ReactJS, Python in Flask, and MySQL</p>
                    </div>
                </div>
                <div className='contact-bio'>
                    <FontAwesomeIcon icon='mobile-alt' style={{color: '#2997ff', fontSize: '24px'}} />
                    <div className='bio'>
                        <p>(801) 319-2090</p>
                    </div>
                </div>
                <div className='contact-bio'>
                    <FontAwesomeIcon icon='mail-bulk' style={{color: '#2997ff', fontSize: '24px'}} />
                    <div className='bio'>
                        <p>bradyj.reese@gmail.com</p>
                    </div>
                </div>
            </div>
            <div
                className='picture-wrapper'
                style={{
                    background: "url(" + contactPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}    
            />
        </div>
    )
}