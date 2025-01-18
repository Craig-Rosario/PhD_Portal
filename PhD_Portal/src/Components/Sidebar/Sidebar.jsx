import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';
import somaiyaFull from '../../assets/svu_logo.png';
import { FaHome} from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";
import { LiaComments } from "react-icons/lia";
import { FaTimeline, FaBars } from "react-icons/fa6";
import { MdOutlineUploadFile ,  MdRecommend } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";


const Sidebar = ({ CollapseState }) => {

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
           <div className='mainPortalTopBar'><div className='mainCollapseBtnDiv'><button onClick={CollapseState} className='mainCollapseBtn'><FaBars className='CollapseIcon'/></button></div>
            <div className="topSection">
                <a href='/Dashboard'><img src={somaiyaFull} alt="somaiya logo" className='somaiyaLogo'/></a>
            </div>
            </div>
            <div className="mainSection">
                <nav>
                    <ul>
                        <li onClick={()=>handleNavigation('/dashboard')}><div className='sideBarItems'><FaHome className='sideBarIcons'/>&emsp;Dashboard</div></li>
                        <li onClick={()=>handleNavigation('/thesisUpload')}><div className='sideBarItems'><MdOutlineUploadFile  className='sideBarIcons'/>&emsp;Thesis Upload</div></li>
                        <li onClick={()=>handleNavigation('/thesisFeedback')}><div className='sideBarItems'><VscFeedback className='sideBarIcons'/>&emsp;Thesis Feedback</div></li>
                        <li onClick={()=>handleNavigation('/thesisDetails')}><div className='sideBarItems'><GrDocumentText className='sideBarIcons'/>&emsp;Thesis Details</div></li>
                        <li><div className='sideBarItems'><LiaComments className='sideBarIcons'/>&emsp;Comments</div></li>
                        <li><div className='sideBarItems'><FaTimeline className='sideBarIcons'/>&emsp;Timeline</div></li>
                        <li onClick={()=>handleNavigation('/guidelines')}><div className='sideBarItems'><MdRecommend className='sideBarIcons'/>&emsp;Guidelines</div></li>
                    </ul>
                </nav>
            </div>
            <div className="bottomSection">
                <button className='signOutBtn' onClick={handleSignout}><div className='signOutDiv'><PiSignOut className='signOutIcon'/>&ensp;Logout</div></button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
