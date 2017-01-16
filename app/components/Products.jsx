import React from 'react';
import { Link } from 'react-router';

export default ({ products }) => (
  <div className="product-grid">
    <ol className="breadcrumb">
      <li><Link to="/">Home</Link></li>
      <li className="active">Product</li>
    </ol>
    <section className="product-grid container-fluid">
      <div className="row">
        {
          products && products.map(product => (
            <div className="product-item col-xs-12 col-lg-4" key={ product.id }>
              <Link to={`/products/${product.id}`}>
                <div className="image-wrapper">
                  <img src={ product.image || 'http://placehold.it/350x150' } />
                </div>
                <div className="product-info">
                  <span><strong>{ product.name }</strong></span>
                  <span>{ product.price }</span>                  
                </div>
              </Link>
            </div>            
          ))
        }
      </div>    
    </section>
  </div>
);
