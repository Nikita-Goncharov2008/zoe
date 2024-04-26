import React from 'react';
import woman from '../../img/woman.png'

const MainSecondComponent = () => {
    return (
        <>
        <div className="main__second__block">
            <div className="main__second__block__left">
                <img className="main__second__block__left__img" src={woman} alt="woman"/>
                <h2 className="main__second__block__left__header2">Feed your <br/>dreams </h2>
            </div>
            <div className="main__second__block__right">
                <div className="main__second__block__right__border">
                    <h3 className="main__second__block__right__header3">Created by the world's <br/>top scientists</h3>
                    <p className="main__second__block__right__paragraph">Our expert team leads three of the largest nutrition research studies with scientists at the world’s most respected research institutions.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainSecondComponent;
