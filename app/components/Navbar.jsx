import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
// import { logout } from '../action-creators/auth';
import { logout } from '../reducers/auth';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
    console.log("PROPS", this.props);
  }
  render() {
    return (
      <div className="navbar main">
        <div className="menu-wrapper">
          <ul className="left-align">
            <li>
              <Link to="/products">SHOP</Link>
              <div className="submenu-wrapper">
                <ul>
                  <li><Link>Category 1</Link></li>
                  <li><Link>Category 2</Link></li>
                  <li><Link>Category 3</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link>ABOUT</Link>
            </li>
            <li>
              <Link>PRESS</Link>
            </li>
          </ul>         
        </div>
        <div className="logo">Online Bling</div>
        <div className="iconmenu-wrapper">
          <ul className="right-align">          
            <li>
              <Link><i className="fa fa-user" aria-hidden="true"></i></Link>             
            </li>           
            <li>
              <Link><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>             
            </li>           
            <li className="search-wrapper">             
              <div className="form-wrapper">
                <form action="/api/search" method="get" role="search">                
                  <input name="search" type="text" placeholder="SEARCH..." className="search-box-form hint text" />
                  <button type="submit" className="fa fa-search"></button>
                </form>               
              </div>
              <Link className="open-toggle"><i className="fa fa-search" aria-hidden="true"></i></Link>        
              <Link className="close-toggle"><i className="fa fa-times" aria-hidden="true"></i></Link>                    
            </li>           
          </ul>                 
        </div>
      </div>      
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
        <button
          className="navbar-btn btn btn-default"
          onClick={this.props.logout}>logout</button>
        </li>
      </ul>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ auth }) => ({ currentUser: auth });

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logout());
    browserHistory.push('/');
  }
});

export default connect(mapProps, mapDispatch)(Navbar);
