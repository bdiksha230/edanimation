import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './component/Home';
import Header from './component/Header';

const App = () => {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  )
}

export default App