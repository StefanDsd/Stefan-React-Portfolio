

import Header from './components/Header';
import Contact from './components/Contact';
import Section from './components/Section';
import './App.css';
import Projects from './components/Projects';
// import Technologies from './components/Technologies';
import About from './components/About';
import LanguageCarousel from './components/LanguageCarousel';
import ScrollButton from './components/ScrollButton';

function App() {

  return (
    <div className="App">
      <Header />
      <ScrollButton />
      <Section />
      <About />
      <Projects />
      <LanguageCarousel />
      {/* <Technologies /> */}
      <Contact />
    </div>
  );
}

export default App;
