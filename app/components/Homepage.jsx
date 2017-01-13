import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export default class Homepage extends Component {
  
	render () {
		console.log('test time')
		return (

			<div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <h1>Online Bling</h1>
        <div className="navbar-header">
          <a className="navbar-brand clearfix" >
					</a>
        </div>
        <div className="collapse navbar-collapse">
          <Navbar/>
        </div>
        <div className="container">
          <img src="https://d1y7kerpdff7pl.cloudfront.net/Drake%20Necklace.jpg" />
          <button type="button" className="main-btn">SHOP NOW</button>
        </div>

        <div>
          <Footer onSubscribe={this.handleSubscribe}/>
        </div>

      </div>

			)
	}
}
