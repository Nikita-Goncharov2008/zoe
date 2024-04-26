import React from 'react';
import arrow from '../../img/arrow.svg'

const MainSixthComponent = () => {
    return (
        <>
        <div className="main__sixth__block">
            <div className="main__sixth__block__left">
                <h2 className="main__sixth__block__left__header2">Rewrite the <br/>rules by adding</h2>
                <button className="black__button main__sixth__block__left__button">See what ZOE can do</button>
            </div>
            <div className="main__sixth__block__right">
                <ul className="main__sixth__block__right__list">
                    <li className="main__sixth__block__right__list__item">Your gut can have more influence on your health than your genes. <img src={arrow} alt="arrow"/></li>
                    <li className="main__sixth__block__right__list__item border">Counting calories doesn’t work. So we don’t.<img src={arrow} alt="arrow"/></li>
                    <li className="main__sixth__block__right__list__item">Menopause transforms your body. It’s so much more than hot flashes.<img src={arrow} alt="arrow"/></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default MainSixthComponent;
