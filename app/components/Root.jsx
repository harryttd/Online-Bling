import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = ({ children }) => (
  <div>
    <Navbar />
    { children }
    <Footer />
  </div>
);

export default Root;
