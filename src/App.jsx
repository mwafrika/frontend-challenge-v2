import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NotFound from './components/notFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' index element={<Home />} />
          {/* <Route path='/dragons' element={<Dragon />} /> */}
          <Route path='/not' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
