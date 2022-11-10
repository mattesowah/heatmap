
import React, { useEffect, useState, useRef } from 'react'
import { Routes ,Route } from 'react-router-dom';
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
