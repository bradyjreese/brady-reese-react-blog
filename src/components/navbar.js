import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Me',
        path: '/contact-me'
    },
    {
        title: 'Login',
        path: '/login'
    },
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
                {/* TODO remove Avatar */}
                <span className='nav-avatar'>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className='user-name'>{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)} />
        </nav>
    )
}