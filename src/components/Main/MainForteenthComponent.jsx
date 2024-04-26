import React from 'react';
import granddad from '../../img/granddad.png'


const MainForteenthComponent = () => {
    return (
        <>
            <div className="main__forteenth__block">
                <div className="main__forteenth__block__left">
                    <div className="main__forteenth__block__left__limiter">
                        <p className="main__forteenth__block__left__p1">CLINICAL STUDY</p>
                        <h3>We’re investing in a clinical trial to quantify our impact.</h3>
                        <p className="main__forteenth__block__leftp2">Lots of programs claim to work but we’re putting our money where our mouth is! We’ve commissioned a <a href="#">clinical trial</a></p>
                        <p className="main__forteenth__block__leftp2">with 290 people to validate how ZOE’s personalized nutrition program compares to standardized nutrition advice. Results will be published in 2023.</p>
                    </div>
                </div>
                <div className="main__forteenth__block__right">
                    <img width="100%" src={granddad} alt="granddad"/>
                </div>
            </div>
        </>
    );
}

export default MainForteenthComponent;
