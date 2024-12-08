import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';
import somaiyaFull from '../../assets/Somaiya.jpeg';
const Sidebar = () => {

    const navigate=useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleSignout=()=>{
        navigate('/');
    };


  return (
    <div className='container'>
        <div className="sideBar">
            <div className="topSection">
                <img src={somaiyaFull} alt="somaiya logo" className='somaiyaLogo'/>
            </div>
            <div className="mainSection">
                <nav>
                    <ul>
                        <li onClick={()=>handleNavigation('/dashboard')}>Dashboard</li>
                        <li onClick={()=>handleNavigation('/thesisUpload')}>Thesis Upload</li>
                        <li onClick={()=>handleNavigation('/thesisFeedback')}>Thesis Feedback</li>
                        <li onClick={()=>handleNavigation('/thesisDetails')}>Thesis Details</li>
                        <li>Comments</li>
                        <li>Timeline</li>
                        <li onClick={()=>handleNavigation('/guidelines')}>Guidelines</li>
                    </ul>
                </nav>
            </div>
            <div className="bottomSection">
                <button className='signOutBtn' onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
