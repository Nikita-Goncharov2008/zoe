import React from 'react';

const MenuComponent = () => {
    return (
        <>
            <menu className="header__menu">
            <button className="burger">
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
            </button>
            <nav className="header__menu__linksBlock">

                
                
                <div className="header__menu__linksBlock__leftBlock">
                    <a href="#">Why ZOE?</a>
                    <a href="#">How It Works</a>
                    <a href="#">Reviews</a>
                </div>
                
                <div className="header__menu__linksBlock__rightBlock">
                    <a href="#">Learn</a>
                    <a href="#">Science</a>
                    <a href="#">Help</a>
                </div>

            </nav>

            </menu>
        </>
    );
}

export default MenuComponent;
