import React from 'react'
import './EducationDetails.css'
import ButtonLink from '../../ButtonLink/ButtonLink'


const EducationDetails = () => {
  return (
    <>
        <h1 className='eduTitle'>Education details</h1>
        <div className='eduContainer'>
            <div className='eduDetails'>
                <label className='eduDetails'>
                    Doctorate
                    <input type="text" placeholder='Batch/Department of Research' className='eduInput'/>
                </label>
                <label className='eduDetails'>
                    Post-graduation
                    <input type="text" placeholder='Title of PG degree' className='eduInput'/>
                    <input type="text" placeholder='Institute' className='eduInput'/>
                    <input type='text' placeholder='University' className='eduInput'/>
                </label>
                <label className='eduDetails'>
                    Under-graduation
                    <input type="text" placeholder='Title of UG degree' className='eduInput'/>
                    <input type="text" placeholder='Institute' className='eduInput'/>
                    <input type='text' placeholder='University' className='eduInput'/>
                </label>
            </div>
            <div className='Btn'>
                <ButtonLink to='Documents' children='Continue' className='contBtn'/>
            </div>
        </div>
    
    </>
  )
}

export default EducationDetails
