import React from 'react';
import line from '../../img/line.svg'
import upArrow from '../../img/upArrow.svg'

const MainEleventhComponent = () => {
    return (
        <>
            <div className="main__eleventh__block">
                <img src={upArrow} alt="upArrow"/>
                <div className="text__relocator">
                    <h3 className="main__eleventh__block__h3">84% feel healthier</h3>
                    <p className="main__eleventh__block__p">TOP HEALTH IMPROVEMENTS</p>
                </div>
                <img className="line" src={line} alt="line"/>
                <ul className="main__eleventh__block__ul">
                    <li className="main__eleventh__block__ul__li">Improved mood & alertness</li>
                    <li className="main__eleventh__block__ul__li">Better bowel habits</li>
                    <li className="main__eleventh__block__ul__li">Improved blood sugar & fats</li>
                    <li className="main__eleventh__block__ul__li">Less bloating</li>
                    <li className="main__eleventh__block__ul__li">Better sleep quality</li>
                </ul>
            </div>
        </>
    );
}

export default MainEleventhComponent;
