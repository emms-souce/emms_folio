import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx"
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/> 
      <Experience/>
      <Contact/>
      
      <SocialLinks/>
    </div>
  );
}

export default App;
