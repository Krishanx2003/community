import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Community from './pages/Community';
import Events from './pages/Events';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
