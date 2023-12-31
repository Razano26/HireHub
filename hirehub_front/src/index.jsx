import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/header';
import Error from './Components/Error';
import Dashboard from './Pages/Dashboard'
import Arrival from './Pages/Arrival'
import Deppart from './Pages/Deppart'
import Archive from './Pages/Archive'
import './Styles/Index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='grid'>
          <Header/>
          <div className='Page'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Arrival" element={<Arrival />} />
              <Route path="/Deppart" element={<Deppart />} />
              <Route path="/Archive" element={<Archive />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
      </div>
    </Router>
  </React.StrictMode>
);