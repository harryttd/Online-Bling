import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    { children }
    <Footer />
  </div>
);

export default Root;
