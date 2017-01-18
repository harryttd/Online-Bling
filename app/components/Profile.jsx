import { connect } from 'react-redux';
import { removeItem, updateQuantity } from '../action-creators/cart';

const UserProfile = (props) =>{
	return (
		<div className="user-profile">
	    <ol className="breadcrumb">
	      <li><Link to="/">Home</Link></li>
	      <li className="active">Product</li>
	    </ol>	    
	    <section className="user-info container-fluid">
	      <div className="row">
	        <form>
		        <div className="form-group">
		        	<label>Name</label>
		        	<input type="text" name="name" className="form-control" />
		        </div>
		        <div className="form-group">
		        	<label>Email</label>
		        	<input type="text" name="email" className="form-control" />
		        </div>		        
		        <button type="submit">Submit</button>
		      </form>
	      </div>
	    </section>
	  </div>		
	)
}

const mapState = ({ auth }) => ({ auth });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Cart);
