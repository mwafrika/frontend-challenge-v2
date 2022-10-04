import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NotFound from './components/notFound';
import Form from './components/form';
import Details from './components/eventDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/create' element={<Form />} />
          <Route path='/event' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
