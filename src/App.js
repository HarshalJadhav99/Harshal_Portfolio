import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
// import '../../main.css';
import Index from './components/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Hero from './pages/Hero';
import Service from './pages/Service';
import WhyWork from './pages/WhyWork';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GotToTop from './components/GotToTop';
import { ThemeProvider } from 'styled-components';
import KollabtreeGreen from './pages/KollabtreeGreen';
import Plantshop from './pages/Plantshop';
import SalesWebApp from './pages/SalesWebApp';
import DigitalShop from './pages/DigitalShop';

// import './pages/function';


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgb(24 24 29)',
      white: '#fff',
      black: '#212529',
      helper: '#8490ff',
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: 'rgb(98,84,243,0.5)',
      hr: "#fffff",
      gradient: 'linear-gradient(0deg,rgb(132 144 255) 0% , rgb(98 189 252) 100%',
      shadow: 'rgba(0,0,0,0.02)0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;',
      shadowSupport: 'rgba(0,0,0,0.16)0px 1px 4px',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GotToTop />

        <Index />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/> */}
          <Route path='/project1' element={<KollabtreeGreen />} />
          <Route path='/project2' element={<Plantshop />} />
          <Route path='/project3' element={<SalesWebApp />} />
          <Route path='/project4' element={<DigitalShop />} />
        </Routes>
        <Footer /></Router></ThemeProvider>
  );
}

export default App;
