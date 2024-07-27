import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import Blog from './pages/blog.js';
import Header from './components/header.js'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>      
    </>
  );
}

export default App;
