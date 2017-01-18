import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { logout } from '../reducers/auth';
import Categories from './Categories';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'

/* -----------------    COMPONENT     ------------------ */

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {}
    };
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({auth:nextProps.auth})
  }
  onClickLogout(){
    this.props.logout();
    browserHistory.push('/');
  }
  render(){
    const { auth } = this.props;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Online Bling</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Categories/>
            <NavItem eventKey={2} href="#">ABOUT</NavItem>
            <NavItem eventKey={3} href="#">PRESS</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={4} href="#">
              <i className="fa fa-search" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={5} href="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </NavItem>
            { auth && auth.email && auth.password_digest ?
              ( <NavDropdown eventKey={6} title="USER" id="users">
                  <MenuItem href="/profile"></MenuItem>
                  <MenuItem href="/address">Address Book</MenuItem>
                  <MenuItem role="separator" class="divider"></MenuItem>
                  <MenuItem onClick={this.onClickLogout}>Logout</MenuItem>
                </NavDropdown> ) :
              ( <NavDropdown eventKey={6} title="USER" id="users">
                  <MenuItem href="/signup">Register</MenuItem>
                  <MenuItem href="/login">Login</MenuItem>
                </NavDropdown> )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  /*
   * This is previous navbar, left this for possible use
   *
  // render() {
  //   const { auth } = this.props;
  //   return (
  //     <div className="navbar main">
  //       <div className="menu-wrapper">
  //         <ul className="left-align">
  //           <li>
  //             <Link to="/products">SHOP</Link>
  //             <div className="submenu-wrapper">
  //               <ul>
  //                 <li><Link>Category 1</Link></li>
  //                 <li><Link>Category 2</Link></li>
  //                 <li><Link>Category 3</Link></li>
  //               </ul>
  //             </div>
  //           </li>
  //           <li>
  //             <Link>ABOUT</Link>
  //           </li>
  //           <li>
  //             <Link>PRESS</Link>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="logo">Online Bling</div>
  //       <div className="iconmenu-wrapper">
  //         <ul className="right-align">
  //           <li className="user-wrapper">
  //             <Link><i className="fa fa-user" aria-hidden="true"></i></Link>

  //               { auth && auth.email && auth.password_digest ?
  //                 ( <ul className="dropdown-menu">
  //                     <li><Link to="/profile">Profile</Link></li>
  //                     <li role="separator" class="divider"></li>
  //                     <li><div onClick={this.onClickLogout}>Logout</div></li>
  //                   </ul> ) :
  //                 ( <ul className="dropdown-menu">
  //                     <li><Link to="/signup">Register</Link></li>
  //                     <li><Link to="/login">Login</Link></li>
  //                   </ul> )
  //               }
  //           </li>
  //           <li>
  //             <Link><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
  //           </li>
  //           <li className="search-wrapper">
  //             <div className="form-wrapper">
  //               <form action="/api/search" method="get" role="search">
  //                 <input name="search" type="text" placeholder="SEARCH..." className="search-box-form hint text" />
  //                 <button type="submit" className="fa fa-search"></button>
  //               </form>
  //             </div>
  //             <Link className="open-toggle"><i className="fa fa-search" aria-hidden="true"></i></Link>
  //             <Link className="close-toggle"><i className="fa fa-times" aria-hidden="true"></i></Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  // renderLoginSignup() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //        <Link to="/signup" activeClassName="active">signup</Link>
  //       </li>
  //       <li>
  //         <Link to="/login" activeClassName="active">login</Link>
  //       </li>
  //     </ul>
  //   );
  // }

  // renderLogout() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //       <button
  //         className="navbar-btn btn btn-default"
  //         onClick={this.props.logout}>logout</button>
  //       </li>
  //     </ul>
  //   );
  // }
  */
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ auth, categories }) => ({ auth, categories });


const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logout());
    browserHistory.push('/');
  }
});

export default connect(mapProps, mapDispatch)(AppBar);
