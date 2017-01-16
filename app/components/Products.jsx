import React from 'react';
import { Link } from 'react-router';

export default ({ products }) => (
    <div>
      <h3>PRODUCTS</h3>
      <div className="row">
        {
          products && products.map(product => (
            <div className="col-xs-4" key={ product.id }>
              <Link className="thumbnail" to={`/products/${product.id}`}>
                <img src={ product.image } />
                <div className="caption">
                  <h5>
                    <span>{ product.name }</span>
                  </h5>
                  <small>description here??</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
);
