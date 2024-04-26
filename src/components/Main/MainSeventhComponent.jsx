import React from 'react';
import boxes from '../../img/boxes.jpg'


const MainSeventhComponent = () => {
    return (
        <>
            <div className="main__seventh__block">
                <div className="main__seventh__block__left">
                    <div className="main__seventh__block__left__border">
                        <p className="main__seventh__block__left__paragraph1">OUR TESTS</p>
                        <h3 className="main__seventh__block__left__header3">Start your program with <br/>our at-home test.</h3>
                        <p className="main__seventh__block__left__paragraph2">One-size-fits-all advice doesn't work. So we'll provide you with the most advanced analysis of your gut bacteria, blood sugar and blood fats available. We'll then compare your results to thousands of other people we've tested. Using patented techniques you can't get anywhere else.</p>
                        <button className="yellow__button main__seventh__block__left__button">Discover our tests</button>
                    </div>
                </div>
                <div className="main__seventh__block__right">
                    <div className="main__seventh__block__right__border">
                        <img src={boxes} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSeventhComponent;
