import React from 'react'
import './ThesisUpload.css'
import noti from '../../assets/noti.png';
import prof from '../../assets/prof.png';

const ThesisUpload = () => {
  return (
    <>
      <div className='navBar'>
        <div className='hero'>Thesis Submission</div>
        <div className="buttons">
          <button className='notiBtn'>
            <img src={noti} alt="Notification" />
          </button>
          <button className='profBtn'>
            <img src={prof} alt="Profile" />
          </button>
        </div>
      </div>


      <div className='upload'>
        <div className='uploadThesis'>
          <p className='Title'>Upload Thesis</p>
          <div className='mainUpload'>
            <input type="file" />
          </div>
        </div>

        <div className='uploadSupportingDocs'>
          <p className='Title'>Upload Supporting Documents</p>
          <div className='mainUpload'>
            <input type="file" />
          </div>
        </div>
      </div>

      <div className='submit'>
        <button className='submitBtn'>Submit</button>
      </div>
    </>
  )
}

export default ThesisUpload
