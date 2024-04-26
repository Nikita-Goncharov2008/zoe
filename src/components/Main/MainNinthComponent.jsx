import React from 'react';
import tables from '../../img/tables.png'
import PamelaFoust from '../../img/PamelaFoust.png'


const MainNinthComponent = () => {
    return (
        <>
            <div className="main__ninth__block">
            <div className="main__ninth__block__review">
                <h3 className="main__ninth__block__review__header3">We set out to change <br/>lives, and it's working!</h3>
                <div className="main__ninth__block__review__reating">
                    <img className="main__ninth__block__review__reating__img" src={tables} alt="tables"/>
                    <p className="main__ninth__block__review__reating__pragraph">4.5/5</p>
                </div>
            </div>
            <div className="main__ninth__block__reviewExamples">

                <div className="main__ninth__block__reviewExamples__card">
                    <div className="card__border">
                    <p className="card__abrev">AO</p>
                    <p className="card__name">Anne O'Brien</p>
                    <img className="card__reviewImage" src={tables} alt="tables"/>
                    <p className="card__shortText">ZOE has transformed my life</p>
                    <p className="card__longText">Using the program has been like being given an owner’s manual for my body for the first time, at age 68. Since I was a teenager, I’ve struggled with managing my…<a href="#">read more</a></p>
                    <p className="card__time">08:32 · 10 Nov</p>
                    </div>

                </div>

                <div className="main__ninth__block__reviewExamples__card">
                    <div className="card__border">
                    <div className="user__with__img">
                        <p className="card__imageProfile"><img src={PamelaFoust} alt="Pamela Foust"/></p>
                        <p className="card__name">Pamela Foust</p>
                    </div>
                    <img className="card__reviewImage" src={tables} alt="tables"/>
                    <p className="card__shortText">Illuminating!</p>
                    <p className="card__longText">I am down 7 lbs, have gotten off of coffee but am more alert than I had been before, sleeping more soundly, and my blood pressure is better than it’s been in over a…<a href="#">read more</a></p>
                    <p className="card__time">06:58 · 4 Sep</p>
                    </div>
                    
                </div>

                <div className="main__ninth__block__reviewExamples__card">
                    <div className="card__border">
                    <p className="card__abrev">PE</p>
                    <p className="card__name">Pamela Eastman</p>
                    <img className="card__reviewImage" src={tables} alt="tables"/>
                    <p className="card__shortText">Life Changing Experience</p>
                    <p className="card__longText">I called this a life changing experience and I don’t say that lightly. This program has had a huge impact on how I look at food and how I think about what I’m going to…<a href="#">read more</a></p>
                    <p className="card__time">22:25 · 5 May</p>   
                    </div>
                    
                </div>

                <div className="main__ninth__block__reviewExamples__card">
                    <div className="card__border">
                        <p className="card__abrev">ML</p>
                        <p className="card__name">Maggie Lozano</p>
                        <img className="card__reviewImage" src={tables} alt="tables"/>
                        <p className="card__shortText">I am so grateful for the ZOE method</p>
                        <p className="card__longText">Menopause has been tough and the weight gain was depressing. With ZOE, I’ve learned how to eat for my biology and how to pair foods I love to get a score that’s right …<a href="#">read more</a></p>
                        <p className="card__time">17:18 · 14 Mar</p>
                    </div>
                    
                </div>

            </div>
            <button className="black__button main__ninth__block__button">Read all reviews</button>
        </div>
        </>
    );
}

export default MainNinthComponent;
