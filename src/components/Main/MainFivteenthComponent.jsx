import React from 'react';
import arrow from '../../img/arrow.svg'

const MainFivteenthComponent = () => {
    return (
        <>
            <div className="main__fivtetnth__block">
            <h2 className="main__fivtetnth__block__header2">Make food <br/>work for you</h2>
            <h3 className="main__fivtetnth__block__header3">From $12 a week</h3>
            <button className="yellow__button main__fivtetnth__block__button">Learn more <img src={arrow} alt=""/></button>
            <p className="main__fivtetnth__block__paragraph">ZOE starts at just $12.35/week. Based on a complete ZOE test for $294 (available in 6 <br/>installments of $49) and 12-month ZOE membership for $348.</p>
        </div>
        </>
    );
}

export default MainFivteenthComponent;
