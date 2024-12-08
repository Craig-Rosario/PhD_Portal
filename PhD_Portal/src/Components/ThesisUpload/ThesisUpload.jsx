import React from 'react'
import './ThesisUpload.css'
import noti from '../../assets/noti.png';
import prof from '../../assets/prof.png';

const ThesisUpload = () => {
  return (
    <>
      <div className='navBar'>
        <div className='hero'>Thesis Upload</div>
        <div className="buttons">
          <button className='notiBtn'>
            <img src={noti} alt="Notification" />
          </button>
          <button className='profBtn'>
            <img src={prof} alt="Profile" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ThesisUpload
