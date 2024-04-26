import React from 'react';
import MenuComponent from './MenuComponent';
import HeaderMainContentComponent from './HeaderMainContentComponent';
import './Header.css'
const Header = () => {
    return (
        <>
        <header className="header">
            <div className="header__max-width">
                <MenuComponent/>
                <HeaderMainContentComponent/>
            
            </div>
    </header>
    </>
    );
}

export default Header;
