import { expect } from 'chai';
import { receiveProducts, receiveProduct } from 'APP/app/action-creators/products';

describe('Products Actions', () => {
  const testProducts = [{name: 'Gold Dude Necklace', sku: 'GDN1', description: {metal: '24K Yellow Gold', design: 'chain', stone: 'none', age: 'Adults'}, price: 1000, quantity: 20},
  {name: 'Drake Bling Stud Diamond Earrings', sku: 'DSD1', description: {metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Adults'}, price: 3000, quantity: 50},
  {name: 'Baby Emerald Earrings', sku: 'BE1', description: {metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Baby'}, price: 200, quantity: 50}];

  it('Sets all products', () => {
		expect(receiveProducts(testProducts)).to.be.deep.equal({
			type: 'RECEIVE_PRODUCTS',
			products: testProducts
		});
	});

  const testProduct = {name: 'Diamond Ring', sku: 'GR1', description: {metal: '14K Yellow Gold', design: 'Butterfly', stone: 'diamond', age: 'Teens'}, price: 99.99, quantity: 10};

  it('Sets product', () => {
		expect(receiveProduct(testProduct)).to.be.deep.equal({
			type: 'RECEIVE_PRODUCT',
			product: testProduct
		});
	});

});
