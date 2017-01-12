import React from 'react';
import { connect } from'react-redux';
import { Link, browserHistory } from 'react-router';
import { logout } from '../actions/auth';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/"><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/09/16/Drake-Hotline-Bling.jpg" height='40' width ='40' /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/shop" activeClassName="active">SHOP</Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active">ABOUT</Link>
              </li>
							<li>
                <Link to="/press" activeClassName="active">PRESS</Link>
              </li>
            </ul>
            { this.props.currentUser ? this.renderLogout() : this.renderLoginSignup() }
          </div>
        </div>
      </nav>
    );
  }

  renderLoginSignup() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
         <Link to="/signup" activeClassName="active">signup</Link>
        </li>
        <li>
          <Link to="/login" activeClassName="active">login</Link>
        </li>
      </ul>
    );
  }

  renderLogout() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
        <button className="navbar-btn btn btn-default"
          onClick={this.props.logout}>logout</button>
        </li>
      </ul>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ currentUser }) => ({ currentUser });

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logout())
    browserHistory.push('/');
  }
})

export default connect(mapProps, mapDispatch)(Navbar);
