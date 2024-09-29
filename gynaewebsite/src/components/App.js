import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Home from './Home.js'
import About from './About.js'
import ServicesPage from './ServicesPage.js'
import Stories from './Stories.js'
import Contact from './Contact.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react'
import Appointment from './Appointment.js'

function App() {
  useEffect(() => {
    (async () => {
        // Dynamically load Isotope
        const PureCounter = (await import('@srexi/purecounterjs')).default;
        new PureCounter();
    })();
}, []);
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<ServicesPage/>}/>
        <Route path="stories" element={<Stories/>}/>
        <Route path="contact" element={<Contact/>} />
        <Route path="appointment" element={<Appointment/>} />
      </Routes>
    </Router>
    <Footer/>
    </>

  );
}

export default App;
