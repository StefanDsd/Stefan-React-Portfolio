import Contact from "./components/Contact";
import Section from "./components/Section";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />;
        <Route path="/info" element={<Info />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
