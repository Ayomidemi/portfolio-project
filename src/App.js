import About from './About';
import './App.css';
import Home from './Home';
import Project from './Project';
import Service from './Service';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      < Home />
      <About />
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>  
  );
}

export default App;
