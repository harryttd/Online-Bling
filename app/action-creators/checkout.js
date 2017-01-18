import axios from 'axios';
import { isEqual } from 'lodash';

export const confirmCheckout = (shippingAddress, billingAddress) => () => {
  axios.post('/api/address', shippingAddress)
  .then(() => {
    if (!isEqual(shippingAddress, billingAddress)) {
      axios.post('/api/address', billingAddress);
    }
  })
  .catch(error => console.error("Could not add address(es) to database", error));
};
