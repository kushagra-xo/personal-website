import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import Blog from './pages/blog.js';
import About from './pages/about.js';
import Header from './components/header.js'

function App() {
  return (
    <body>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>      
    </body>
  );
}

export default App;
