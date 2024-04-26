import React from 'react';
import tables from '../../img/tables.png'



const MainFirstComponent = () => {
    return (
        <>
        <div className="main__first__block">
            <h2 className="main__first__block__header2">The personalized nutrition program from <br/>the world's largest nutrition-science study</h2>
            <div className="main__first__block__rating">
                <img className="main__first__block__rating__img" src={tables} alt="tables"/>
                <p className="main__first__block__rating__paragraph">4.5/5 on Trustpilot</p>
                <a href="#">Read reviews</a>
            </div>
        </div>
        </>
    );
}

export default MainFirstComponent;
