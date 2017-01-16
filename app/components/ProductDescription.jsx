import React from 'react';

export default ({ product }) => (
  <table className="table">
    <tbody>
      {
        product.description && Object.keys(product.description).map(key =>
          <tr key={key}>
            <td>{ key }: </td>
            <td>{ product.description[key] }</td>
          </tr>
        )
      }
    </tbody>
  </table>
);
