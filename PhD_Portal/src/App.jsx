import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Profile from './Components/Profile/Profile.jsx';
import SidebarRender from './Components/Sidebar/SidebarRender.jsx';
import ThesisUpload from './Components/ThesisUpload/ThesisUpload.jsx';
import ThesisFeedback from './Components/ThesisFeedback/ThesisFeedback.jsx';
import ThesisDetails from './Components/ThesisDetails/ThesisDetails.jsx'
import Guidelines from './Components/Guidelines/Guidelines.jsx';
import PersonalDetails from './Components/RegisterationPage/PersonalDetails/PersonalDetails.jsx';
import RegSidebar from './Components/RegisterationPage/RegSidebar/RegSidebar.jsx';
import Overview from './Components/RegisterationPage/Overview/Overview.jsx';
import EducationDetails from './Components/RegisterationPage/EducationDetails/EducationDetails.jsx';
import Documents from './Components/RegisterationPage/Documents/Documents.jsx';


const App = () => {

  const Layout = ({ children }) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '20vw' }}>
        <SidebarRender />
      </div>
      <div style={{ flex: 1, padding: '20px', height: '100%', overflowY: 'auto', width: '70vw' }}>
        {children}
      </div>
    </div>
  );
  
  const RegLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '350px', background: '#f0f0f0' }}>
        <RegSidebar />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};


  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<LoginPage />} />
          <Route
            path='/Overview'
            element={
              <RegLayout>
                <Overview />
              </RegLayout>
            }
          />
          
          <Route
            path='/PersonalDetails'
            element={
              <RegLayout>
                <PersonalDetails />
              </RegLayout>
            }
          />
          
          <Route
            path='/EducationDetails'
            element={
              <RegLayout>
                <EducationDetails/>
              </RegLayout>
            }
          />
          
          <Route
            path='/Documents'
            element={
              <RegLayout>
                <Documents />
              </RegLayout>
            }
          />

          <Route
            path='/EducationDetails'
            element={
              <RegLayout>
                <EducationDetails />
              </RegLayout>
            }
          />
          <Route
            path='/Documents'
            element={
              <RegLayout>
                <Documents />
              </RegLayout>
            }
          />
          <Route
            path='/dashboard'
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />

          <Route
            path='/profile'
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />

          <Route
            path='/thesisFeedback'
            element={
              <Layout>
                <ThesisFeedback />
              </Layout>
            }
          />


          <Route
            path='/thesisDetails'
            element={
              <Layout>
                <ThesisDetails />
              </Layout>
            }
          />

          <Route
            path='/guidelines'
            element={
              <Layout>
                <Guidelines />
              </Layout>
            }
          />

          <Route
            path='/thesisUpload'
            element={
              <Layout>
                <ThesisUpload />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
