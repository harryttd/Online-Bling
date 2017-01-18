import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = ({ children, location }) => (
  <div>
    <Navbar />
    { children }
    <Footer />
  </div>
);

export default Root;
