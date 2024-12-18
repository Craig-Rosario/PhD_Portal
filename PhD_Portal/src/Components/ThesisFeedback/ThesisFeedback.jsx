import React, { useState } from 'react';
import './ThesisFeedback.css';
import Navbar from '../Navbar/Navbar.jsx';

const ThesisFeedback = () => {
    const [selectThesis, setSelectThesis] = useState(''); 
    const changeHandler = (event) => {
        setSelectThesis(event.target.value); 
    };

    return (
        <div className="thesisFeedbck">
            <Navbar Text = "Thesis Feedback"/> 
            
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
                <div className="thesisSection">
                    <div className='evaluator'>
                        <p>Evaluator name: John Doe</p>
                    </div>
                    <div className='Evaluation'>
                        <label for="mainEval" className='labelMainEval'>Evaluation</label>
                        <div className='mainEval'>Lorem ipsum dolor sit amet.</div>

                        <label for="EvalReport" className='labelEvalReport'>Evaluation Report</label>
                        <div className="evalReport customScrollbar">The evaluation of the thesis has been completed, and the following feedback is provided. The thesis demonstrates a strong understanding of the subject and uses effective methodologies. However, improvements are recommended in the presentation of the data, particularly in the results section. Some sections require better integration of recent studies to enhance the literature review. Additionally, while the conclusion is clear, it could benefit from more actionable recommendations.</div>
                    </div>
                </div>
            )}

            {selectThesis === 'thesis2' && (
                <div className="thesisSection">
                    <div className='evaluator'>
                        <p>Evaluator name: John Doe2</p>
                    </div>

                    <div className='Evaluation'>
                        <label htmlFor="mainEval" className='labelMainEval'>Evaluation</label>
                        <div className='mainEval'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

                        <label htmlFor="EvalReport" className='labelEvalReport'>Evaluation Report</label>
                        <div className="evalReport customScrollbar">The thesis is well-researched, with a clear and coherent structure. The methodology used is appropriate for the research question, and the data analysis is sound. However, some areas could be improved for clarity, particularly in the explanation of the results. There is a need for more detailed justification of the research choices, particularly with regard to the sample size and data collection methods.</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThesisFeedback;
