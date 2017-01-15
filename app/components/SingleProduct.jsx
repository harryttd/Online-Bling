import React from 'react';
import ProductDescription from './ProductDescription';

export default ({ product }) => (
  <div className="product">
    <h3>{ product.name }</h3>
    <img src={ product.image } className="img-thumbnail" />

    <ProductDescription product={product} />

    <h5>SKU: {product.sku}</h5>
    <h4>${product.price}</h4>
  </div>
);
