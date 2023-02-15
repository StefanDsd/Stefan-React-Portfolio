

import Header from './components/Header';
import Contact from './components/Contact';
import Section from './components/Section';
import './App.css';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import About from './components/About';

function App() {

  return (
    <div className="App">
      <Header />
      <Section />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
