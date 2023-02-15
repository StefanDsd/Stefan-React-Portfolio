

import Header from './components/Header';
import Contact from './components/Contact';
import Section from './components/Section';
import Info from './components/Info';
import './App.css';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {

  return (
    <div className="App">
      <Header />
      <Section />
      <Info />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
