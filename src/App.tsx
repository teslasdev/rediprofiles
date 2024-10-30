// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
