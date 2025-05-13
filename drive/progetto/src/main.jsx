import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoPage from './NoPage.jsx'
import Manage from './Manage';
import Add from './Add';
import Edit from './Edit';
import { BrowserRouter, Routes, Route } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<App />} />
           <Route path='/home' element={<App />} />
           <Route path='/storage' element={<Manage />} />
           <Route path='/upload' element={<Add />} />
           <Route path='/edit/*' element={<Edit />} />
           <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
