import React from 'react';
import arrowDown from '../../img/arrowDown.svg'
import biggerArrowDown from '../../img/biggerArrowDown.svg'


const MainSixteenthComponent = () => {
    return (
        <>
            <div className="main__sixteenth__block">
            <h3 className="main__sixteenth__block__header3">Ask us anything</h3>
            <ul className="main__sixteenth__block__list">
                <div>
                    <li className="main__sixteenth__block__list__item">
                        What does the ZOE program include and how much does it cost?
                    </li>
                    <div className="bigger__arrow__down__block">
                        <img className="main__sixteenth__block__list__item__image biggerArrowDown" src={biggerArrowDown} alt="arrowDown"/>
                    </div>
                </div>
                <div>
                    <li className="main__sixteenth__block__list__item">
                        Where is ZOE available?
                    </li>
                    <img className="main__sixteenth__block__list__item__image" src={arrowDown} alt="arrowDown"/>
                </div>
                <div>
                    <li className="main__sixteenth__block__list__item">
                        How can I qualify for a blood sugar sensor?
                    </li>
                    <img className="main__sixteenth__block__list__item__image" src={arrowDown} alt="arrowDown"/>
                </div>
                <div>
                    <li className="main__sixteenth__block__list__item">
                        How does ZOE analyze my gut microbiome?
                    </li>
                    <img className="main__sixteenth__block__list__item__image" src={arrowDown} alt="arrowDown"/>
                </div>
                
            </ul>
            <p className="main__sixteenth__block__more">More questions? Find answers on our<a className="main__sixteenth__block__more__link" href="#"> FAQs page</a></p>
            </div>
        </>
    );
}

export default MainSixteenthComponent;
