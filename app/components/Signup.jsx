import React from 'react';
import { signup } from 'APP/app/reducers/auth';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);    
  }

  onSignupSubmit(e){
    e.preventDefault();
    if(e.target.password.value !== e.target.passwordConfirm.value) window.alert('password not match');
    else {
      const credentials = {
        email: e.target.email.value,
        password: e.target.password.value,
        name: e.target.name.value
      }
      console.log('credentials', credentials);
      this.props.signup(credentials);
      browserHistory.push('/');
    }    
  }

  render() {
    return (
      <div className="login-wrapper">
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Register</li>
        </ol>
        <section className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <form 
                className="login-form"
                onSubmit={this.onSignupSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" name="email" type="email" />  
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" name="name" type="text" />  
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control" name="password" type="password" placeholder="type your password" />  
                </div>
                <div className="form-group">
                  <label>Password Confirmation</label>
                  <input className="form-control" name="passwordConfirm" type="password" placeholder="re-type your password" />  
                </div>
                <button type="submit" name="submit">Register</button>      
              </form> 
            </div>
          </div>          
        </section>
      </div>
    )
  }
 
};

const mapState = null;
const mapDispatch = { signup }

export default connect (mapState, mapDispatch) (Signup);
