import React from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import SomaiyaLogo from '../../assets/SomaiyaLogo.jpg';
import Ganesh from '../../assets/Ganesh.png'
const LoginPage = () => {
  const navigate=useNavigate();

  const handleLogin=()=>{
    navigate('/dashboard')
  };

  const handleFirstLogin=()=>{
    navigate('/Overview');
  };

  return (
      <div className='LoginPage'>
        <div className='LoginSide'>
            <img src={SomaiyaLogo} alt="Somaiya Logo" className='SomaiyaLogo'/>
            Login to Portal!
            <button className='LoginBtn' onClick={handleLogin}>Login</button>
            <a onClick={handleFirstLogin}>First time?</a>
        </div>
        <div className='ImageSide'>
          <img src={Ganesh} alt="Ganesh img" className='GaneshImg'/>
        </div>
      </div>
  )
}

export default LoginPage
