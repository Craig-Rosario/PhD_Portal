import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import ThesisUpload from './Components/ThesisUpload/ThesisUpload.jsx';
import ThesisFeedback from './Components/ThesisFeedback/ThesisFeedback.jsx';
import ThesisDetails from './Components/ThesisDetails/ThesisDetails.jsx'
import Guidelines from './Components/Guidelines/Guidelines.jsx';
const App = () => {

  const Layout = ({ children }) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '350px', background: '#f0f0f0' }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route
            path='/dashboard'
            element={
              <Layout>
                <Dashboard />
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
                <ThesisDetails/>
              </Layout>
            }
          />

          <Route
            path='/guidelines'
            element={
              <Layout>
                <Guidelines/>
              </Layout>
            }
          />

          <Route
            path='/thesisUpload'
            element={
              <Layout>
                <ThesisUpload/>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
