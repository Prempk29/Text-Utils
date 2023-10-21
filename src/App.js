import Navbarr from './components/Navbar'
import TextForm from './components/TextForm'
import PropTypes from 'prop-types'
import './App.css';
import React, { useState } from 'react'
import About from './components/About'
import Screen from './components/Screen'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route  path="/" element={<Screen/>}>
            <Route  index element={<TextForm heading="Enter the Text Here" />}></Route>
            <Route  path="about" element={<About/>}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
Navbarr.prototype =
{
  title: PropTypes.string.isRequired
}
Navbarr.defaultProps =
{
  title: "prempk"
}
TextForm.prototype =
{
  heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
  heading: "Enter the Text Here"
}

