import React from 'react';
import toast from '../../img/toast.png'
import block from '../../img/block.svg'


const MainEightBlockComponent = () => {
    return (
        <>
            <div className="main__eighth__block">
                <div className="main__eighth__block__left">
                    <img className="main__eighth__block__left__toastImg" src={toast} alt="toast"/>
                    <img className="main__eighth__block__left__svg" src={block} alt="block"/>
                </div>
                <div className="main__eighth__block__right">
                    <p className="main__eighth__block__right__paragraph1">YOUR PROGRAM</p>
                    <h3 className="main__eighth__block__right__header3">Get personalized advice powered by your unique test results</h3>
                    <p className="main__eighth__block__right__paragraph2">On the ZOE Program, no food is off limits because science shows restricting yourself just doesn’t work. So, we'll teach you how to make smart combos each week, using insights from your tests to improve your meals.</p>
                    <button className="yellow__button main__eighth__block__right__button">See how it works</button>
                </div>
            </div>
        </>
    );
}

export default MainEightBlockComponent;
