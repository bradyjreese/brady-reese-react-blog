import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    // TODO more blog functionality
    // {
    //     title: 'Blog',
    //     path: '/blog'
    // },
    {
        title: 'Contact Me',
        path: '/contact-me'
    },
    // TODO link login functionality
    // {
    //     title: 'Login',
    //     path: '/login'
    // },
]

export default function Navbar ({user}) {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className='nav-container'>
            <span className='nav-title'>Brady Reese React Blog</span>
            {/* TODO click event for when clicking outside the menu, menu closes */}
            <div className={`nav-links ${menuActive && 'active'}`}>
                <ul>
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span className='nav-avatar'>
                    <FontAwesomeIcon icon='user-tie' style={{fontSize: '20px'}} />
                    <span className='user-name'>{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)} />
        </nav>
    )
}