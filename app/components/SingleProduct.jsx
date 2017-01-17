import React from 'react';
import ProductDescription from './ProductDescription';

export default ({ product, addToCart }) => (
  <div className="product">
    <h3>{ product.name }</h3>
    <img src={ product.image } className="img-thumbnail" />

    <ProductDescription product={product} />

    <h5>SKU: {product.sku}</h5>
    <h4>${product.price}</h4>
    <button type="submit" className="btn btn-success" onClick={ addToCart(product) }>Add</button>
  </div>
);
