import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx"
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
