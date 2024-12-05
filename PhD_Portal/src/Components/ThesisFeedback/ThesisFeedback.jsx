import React, { useState } from 'react';
import './ThesisFeedback.css';
import noti from '../../assets/noti.png';
import prof from '../../assets/prof.png';

const ThesisFeedback = () => {
    const [selectThesis, setSelectThesis] = useState(''); 
    const changeHandler = (event) => {
        setSelectThesis(event.target.value); 
    };

    return (
        <>
            <div className='navBar'>
                <div className='hero'>Thesis Feedback</div>
                <div className="buttons">
                    <button className='notiBtn'>
                        <img src={noti} alt="Notification" />
                    </button>
                    <button className='profBtn'>
                        <img src={prof} alt="Profile" />
                    </button>
                </div>
            </div>

            
            <div className='dropdown'>
                <select
                    className='mainDropdown'
                    value={selectThesis}
                    onChange={changeHandler}
                >
                    <option className="opt" value="" disabled>Select Thesis</option>
                    <option className="opt" value="thesis1">Thesis 1</option>
                    <option className="opt" value="thesis2">Thesis 2</option>
                </select>
            </div>

            
            {selectThesis === 'thesis1' && (
                <div>
                    <div className='evaluator'>
                        <p>Evaluator name: John Doe</p>
                    </div>

                    <div className='Evaluation'>
                        <label for="mainEval" className='labelMainEval'>Evaluation</label>
                        <div className='mainEval'>Lorem ipsum dolor sit amet.</div>

                        <label for="EvalReport" className='labelEvalReport'>Evaluation Report</label>
                        <div className='evalReport'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, a!</div>
                    </div>
                </div>
            )}

            {selectThesis === 'thesis2' && (
                <div>
                    <div className='evaluator'>
                        <p>Evaluator name: John Doe2</p>
                    </div>

                    <div className='Evaluation'>
                        <label htmlFor="mainEval" className='labelMainEval'>Evaluation</label>
                        <div className='mainEval'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

                        <label htmlFor="EvalReport" className='labelEvalReport'>Evaluation Report</label>
                        <div className='evalReport'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugiat, maxime impedit aperiam recusandae iste praesentium eveniet voluptatibus veniam ex. Laudantium soluta alias deserunt autem!</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ThesisFeedback;
