import React,{useState} from 'react'
import './ThesisDetails.css'
import noti from '../../assets/noti.png';
import prof from '../../assets/prof.png';

const ThesisDetails = () => {

    const [selectThesis, setSelectThesis] = useState(''); 
    const changeHandler = (event) => {
        setSelectThesis(event.target.value); 
    };


  return (
    <>
        <div className='navBar'>
            <div className='hero'>Thesis Details</div>
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
                
            </select>
        </div>



        {selectThesis === 'thesis1' && (
            <div>
                <div className='thesisInfo'>
                    <div className='thesisDetails'>
                        <p>Thesis Details:</p>
                        <div className='inputDetails'>
                            <input type="text" placeholder='Thesis Title' className='input'/>
                            <input type="text" placeholder='Candidate name' className='input' />
                            <input type="text" placeholder='Co-ordinatiors' className='input'/>
                            <input type="text" placeholder='Department'className='input' />
                            <input type="date"className='input' />

                        </div>

                    </div>

                    <label for="thesisview" className='labelThesisView'>View Thesis</label>
                    <div className='thesisview'>Add file</div>
                </div>
            </div>
        )}
    </>
  )
}

export default ThesisDetails
