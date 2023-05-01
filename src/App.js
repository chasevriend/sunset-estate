import React from 'react';
import './css/App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import { ContactPage } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Buy' element={<BuyPage />} />
          <Route path='/Sell' element={<SellPage />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
