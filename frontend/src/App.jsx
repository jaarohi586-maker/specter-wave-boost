import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FinancialTools from './pages/FinancialTools';
import Contact from './pages/Contact';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/financial-tools" element={<FinancialTools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
