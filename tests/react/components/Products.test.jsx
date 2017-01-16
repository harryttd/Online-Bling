import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { range, last } from 'lodash';
import faker from 'faker';

import Products from 'APP/app/components/Products';
import SingleProduct from 'APP/app/components/SingleProduct';

const createRandomProduct = amount => {
    return range(0, amount).map(index => {
        return {
            name: faker.commerce.productName(),
            sku: faker.random.number(),
            description: {color: faker.commerce.color(), material: faker.commerce.productMaterial()},
            price: faker.commerce.price(), quantity: faker.random.number()
        };
    });
};

const testUtilities = {
  createRandomProduct,
  createProducts: () => createRandomProduct(3)
};
const products = testUtilities.createProducts();

describe.only('Products Component', () => {
  // console.log(products);
  let component;
  beforeEach('make component', () => {
    component = shallow(<Products products={products} />);
  });

  it('has three products', () => {
    expect(component.is('div')).to.be.equal(true);
    expect(component.find(".col-xs-4").length).to.be.equal(3);
  });
});
