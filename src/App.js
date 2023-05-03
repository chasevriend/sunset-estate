import React from 'react';
import './css/App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
