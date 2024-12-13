import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar.jsx'
import prof from '../../assets/prof.png'

const Dashboard = () => {
  return (
    <>
      <Navbar Text = "Dashboard" /> 
      <div className='noticeBoard'>
        <p><b>Notice Board</b></p>
        <p>Sample Text</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, temporibus.</p>
     </div>

      <div className='dashBoardMain'>
        <div className='Thesis'>
          <div className='mainThesis'>
            Thesis
          </div>

          <div className='progress'>
            Progress Report
          </div>
        </div>

        <div className='Mentors'>
          <p>Mentors</p>
          <div className='teachers'>
            <div className='newTeach'>
              <img src={prof} alt="profile pic" />
              <p>Mentor</p>
            </div>

            <div className='newTeach'>
              <img src={prof} alt="profile pic" />
              <p>Mentor</p>
            </div>

            <div className='newTeach'>
              <img src={prof} alt="profile pic" />
              <p>Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
