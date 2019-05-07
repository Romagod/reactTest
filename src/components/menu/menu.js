import React from 'react';
import './menu.css';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <Link to='/posts' className="menu__item">Posts</Link>
            <Link to='/about-us' className="menu__item">About us</Link>
            <Link to='/contact' className="menu__item">Contact</Link>
        </div>
    )
};

export default Menu;