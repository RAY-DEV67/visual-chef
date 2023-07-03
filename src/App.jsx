import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/landingpage';
import { ScrollToTop } from './components/scrolltotop';
import { useState } from 'react';
import { PalmOil} from './pages/palmOil';
import { Contact } from './pages/contact';
import { AddPicture } from './pages/addPictures';
import {Admin} from './pages/Admin';
import { Bubbles } from './pages/bubbles';
import { Gele } from './pages/gele';
import { BISD } from './pages/bisd';
import { Smile } from './pages/smile';

export const Theme = React.createContext();
export const Settheme = React.createContext();

function App() {

  const [theme, settheme] = useState("Dark");

  return (
    <div className={theme === "Dark" ? "App h-[100vh] bg-[#d5d1ce] text-white bodyfont" : theme === "Light" ? "App bg-white text-[#323b0a] bodyfont" : ""}>
      <Theme.Provider value={theme}>
        <Settheme.Provider value={settheme}>
    <Router>
     <ScrollToTop>
     <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AddPicture" element={<AddPicture />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/PalmOil" element={<PalmOil />} />
      <Route path="/Bubbles" element={<Bubbles />} />
      <Route path="/Gele" element={<Gele />} />
      <Route path="/Bisd" element={<BISD />} />
      <Route path="/Smile" element={<Smile />} />
      </Routes>
     </ScrollToTop>
    </Router>
    </Settheme.Provider>
    </Theme.Provider>
    </div>
  )
}

export default App
