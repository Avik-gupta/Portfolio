import './App.css';
import Home from './Components/HomePage/Home'
import Aboutus from './Components/Aboutus/Aboutus1'
import ContactUs from './Components/ContactUs/ContactUs'
import Experience from './Components/Experience/Experience'
import Education from './Components/Education/Education1'
import Skills from './Components/Skills/Skills1'
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Footer1 from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutus />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <ContactUs />
      <Footer1 />
    </div>
  );
}

export default App;
