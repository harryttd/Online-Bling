import React from 'react';
import { Link } from 'react-router';

export default ({ cartItems }) => (
  <div className="product-grid">
    <ol className="breadcrumb">
      <li><Link to="/">Home</Link></li>
      <li className="active">Product</li>
    </ol>
    <section className="product-grid container-fluid">
      <div className="row">
        {
          cartItems && cartItems.map(item => (
            <div className="product-item col-xs-12 col-lg-4" key={ item.id }>
              <Link to={`/products/${item.product_id}`}>
                <div className="image-wrapper">
                  <img src={ item.product.image || 'http://placehold.it/350x150' } />
                </div>
                <div className="product-info">
                  <span><strong>{ item.name }</strong></span>
                  <span>{ item.price }</span>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </section>
  </div>
);
