import React from 'react';
import './Header.scss';

const Header = props => {
    return (
        <div className="header">
            <h1>Search for <span className="font-goldman">PLANET</span></h1>
            <div className="header__line" />
        </div>
    )
}

export default Header;