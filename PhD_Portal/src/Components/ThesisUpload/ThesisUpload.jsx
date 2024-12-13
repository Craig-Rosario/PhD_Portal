import React from 'react'
import './ThesisUpload.css'
import Navbar from '../Navbar/Navbar.jsx'

const ThesisUpload = () => {
  return (
    <>
      <Navbar Text = "Thesis Upload"/> 
   
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
