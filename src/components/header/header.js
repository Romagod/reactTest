import React from 'react';
import './header.css';

import Menu from '../menu/menu';
import Logo from '../logo/logo';

const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <Menu/>
        </div>
    )
};

export default Header;