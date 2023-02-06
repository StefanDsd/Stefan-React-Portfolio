import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './components/Contact';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />;
        <Route path="/info" element={<Info />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
