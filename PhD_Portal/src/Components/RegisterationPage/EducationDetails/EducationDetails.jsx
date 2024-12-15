import React,{useState} from 'react'
import './EducationDetails.css'
import ButtonLink from '../../ButtonLink/ButtonLink'


const EducationDetails = () => {
    
    const[pastEmp,setPastEmp]=useState(null);

    const handleEmpChange=(event)=>{
        setPastEmp(event.target.value==='Yes');
    }

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
                
                <div className='eduEmp'>
                    <p>Past Employment</p>
                    <label className='eduEmpInput'>
                        <input type="radio" name='pstEmp' value="Yes" onChange={handleEmpChange}/>
                        Yes
                    </label>
                    <br />
                    <label className='eduEmpInput'>
                        <input type="radio" name='pstEmp' value="No" onChange={handleEmpChange}/>
                        No
                    </label>
                </div>

                {pastEmp &&(
                    <>
                        <div className='empContainer'>
                            <div className='empInput'>
                                <input type="text" placeholder='Name of Organization with Designation' className='empNameInput'/>
                                <input type="text" placeholder='Duration' className='empDurInput'/>
                            </div>
                            <div className='empInput'>
                                <input type="text" placeholder='Name of Organization with Designation' className='empNameInput'/>
                                <input type="text" placeholder='Duration' className='empDurInput'/>
                            </div>
                        </div>
                    
                    </>
                )}
            </div>
            <div className='Btn'>
                <ButtonLink to='Documents' children='Continue' className='contBtn'/>
            </div>
        </div>
    
    </>
  )
}

export default EducationDetails
