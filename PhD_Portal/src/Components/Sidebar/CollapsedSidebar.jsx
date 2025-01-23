import {React , useState} from 'react';
import './CollapsedSidebar.css';
import { useNavigate } from 'react-router-dom';
import somaiyaLogo from '../../assets/SomaiyaLogoWhite.png';
import { FaHome} from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";
import { LiaComments } from "react-icons/lia";
import { FaTimeline, FaBars } from "react-icons/fa6";
import { MdOutlineUploadFile ,  MdRecommend } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";

const CollapsedSidebar = ({CollapseState}) => {
    
    const navigate=useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleSignout=()=>{
        navigate('/');
    };

  return (
    <div className='Collapsed-container'>
        <div className="Collapsed-sideBar">
            <div className='Collapsed-mainPortalTopBar'>
                <div className='Collapsed-mainCollapseBtnDiv'>
                    <button onClick={CollapseState} className='Collapsed-mainCollapseBtn'>
                        <FaBars className='Collapsed-CollapseIcon'/>
                    </button>
                </div>
                <div className="Collapsed-topSection">
                    <a href='/Dashboard'>
                        <img src={somaiyaLogo} alt="somaiya logo" className='Collapsed-somaiyaLogo'/>
                    </a>
                </div>
            </div>
            <div className="Collapsed-mainSection">
                <nav>
                    <ul>
                        <li onClick={()=>handleNavigation('/dashboard')}><div className='Collapsed-sideBarItems'><FaHome className='Collapsed-sideBarIcons'/></div></li>
                        <li onClick={()=>handleNavigation('/thesisUpload')}><div className='Collapsed-sideBarItems'><MdOutlineUploadFile  className='Collapsed-sideBarIcons'/></div></li>
                        <li onClick={()=>handleNavigation('/thesisFeedback')}><div className='Collapsed-sideBarItems'><VscFeedback className='Collapsed-sideBarIcons'/></div></li>
                        <li onClick={()=>handleNavigation('/thesisDetails')}><div className='Collapsed-sideBarItems'><GrDocumentText className='Collapsed-sideBarIcons'/></div></li>
                        <li><div className='Collapsed-sideBarItems'><LiaComments className='Collapsed-sideBarIcons'/></div></li>
                        <li><div className='Collapsed-sideBarItems'><FaTimeline className='Collapsed-sideBarIcons'/></div></li>
                        <li onClick={()=>handleNavigation('/guidelines')}><div className='Collapsed-sideBarItems'><MdRecommend className='Collapsed-sideBarIcons'/></div></li>
                    </ul>
                </nav>
            </div>
            <div className="bottomSection">
                <button className='Collapsed-signOutBtn' onClick={handleSignout}><PiSignOut className='Collapsed-signOutIcon'/></button>
            </div>
        </div>
    </div>
  )
}

export default CollapsedSidebar;