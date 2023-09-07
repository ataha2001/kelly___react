import Navbar from "./components/Navbar/Navbar";
import './assets/css/style.css'
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />  
        <Route path="home" index element={<Home />} />  
        <Route path="about" index element={<About />} />  
        <Route path="resume" index element={<Resume />} />  
        <Route path="services" index element={<Services />} />  
        <Route path="portfolio" index element={<Portfolio />} />  
        <Route path="contact" index element={<Contact />} />  
      </Routes>
      <Footer />
      </div>
      // <Route path="*" element={<NoPage />} />
    
  );
}

export default App;
