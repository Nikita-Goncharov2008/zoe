import React from 'react';
import man from '../../img/man.png'

const HeaderMainContentComponent = () => {
    return (
        <>
        <div className="header__mainContent">

            <div className="header__mainContent__left">
                <div className="header__mainContent__left__limiter">
                    <h1 id="first__h1" className="header__mainContent__head1">Understand how <br/>food affects your body</h1>
                    <button className="black__button header__mainContent__button">Get started</button>
                </div>
            </div>

            <div className="header__mainContent__right">
                <img className="header__mainContent__right__image" src={man} alt="man"/>
            </div>

        </div>
        </>
    );
}

export default HeaderMainContentComponent;
