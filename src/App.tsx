import React from 'react';
import Profile from './pages/Profile';
import { TooltipProvider } from './components/ui/tooltip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile_uiux from './pages/Profile_uiux';
import ClickSpark from './blocks/Animations/ClickSpark/ClickSpark';
import './index.css';

function App() {

  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile-uiux" element={<Profile_uiux />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  )
}

export default App
