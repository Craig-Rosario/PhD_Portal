import React from 'react'
import './RegSidebar.css'
import {useNavigate} from 'react-router-dom'
import somaiyaFull from '../../../assets/svu_logo.png'




const RegSidebar = () => {

    const navigate=useNavigate();
    const handleNavigation =(path)=>{
        navigate(path);
    };

    const handleSignout=()=>{
        navigate('/');
    };



  return (
    <>
        <div className='container'>
            <div className='RegSidebar'>
                <div className="topSection">
                    <img src={somaiyaFull} alt="somaiya logo" className='somaiyaLogo'/>
                </div>

                <div className='mainSection'>
                    <nav>
                        <ul>
                            <li onClick={()=>handleNavigation('/Overview')}>Overview</li>
                            <li>Personal Details</li>
                            <li>Education Details</li>
                            <li>Documents</li>
                        </ul>
                    </nav>
                </div>
                <div className="bottomSection">
                    <button className='signOutBtn' onClick={handleSignout}>Sign Out</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RegSidebar
