const db = require('APP/db')

const seedUsers = () => db.Promise.map([
 {name: 'so may', email: 'god@example.com', password: '1234'},
 {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
 {name: 'Lida Cannon', email: 'kalo@sokum.com', password: '1234'},
 {name: 'Chase Mitchell', email: 'apoinpe@bij.io', password: '1234'},
 {name: 'Gertrude Morgan', email: 'ekisutjul@ahtove.com', password: '1234'},
 {name: 'Josie Vargas', email: 'zuav@om.gov', password: '1234'},
 {name: 'Julian Soto', email: 'uzoho@hu.gov', password: '1234'},
 {name: 'Vincent Cohen', email: 'wu@tonin.edu', password: '1234'},
 {name: 'Tillie Higgins', email: 'acubizfew@pesohu.org', password: '1234'},
 {name: 'Frank Russell', email: 'seja@licgolul.org', password: '1234'},
 {name: 'Franklin Bishop', email: 'ogijeaja@veifus.com', password: '1234'},
 {name: 'Iva Carson', email: 'nikok@ejrib.gov', password: '1234'}
], user => db.model('users').create(user));

const seedOrders = () => db.Promise.map([
  {total: 10, user_id: 1, shipping_address_id: 1, billing_address_id: 1},
  {total: 20, user_id: 2, shipping_address_id: 2, billing_address_id: 2},
  {total: 30, user_id: 3, shipping_address_id: 3, billing_address_id: 3},
  {total: 40, user_id: 4, shipping_address_id: 4, billing_address_id: 1},
  {total: 50, user_id: 5, shipping_address_id: 4, billing_address_id: 2}
], order => db.model('order').create(order));

const seedProducts = () => db.Promise.map([
 {name: 'Diamond Ring', sku: 'GR1', description: {metal: '14K Yellow Gold', design: 'Butterfly', stone: 'diamond', age: 'Teens'}, price: 99.99, quantity: 10},
 {name: 'Gold Dude Necklace', sku: 'GDN1', description: {metal: '24K Yellow Gold', design: 'chain', stone: 'none', age: 'Adults'}, price: 1000, quantity: 20},
 {name: 'Drake Bling Stud Diamond Earrings', sku: 'DSD1', description: {metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Adults'}, price: 3000, quantity: 50},
 {name: 'Baby Emerald Earrings', sku: 'BE1', description: {metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Baby'}, price: 200, quantity: 50},
 {name: 'Drake Exclusive Bracelet', sku: 'DEB1', description: {metal: '14K Gold', design: 'Plain', stone: 'none', age: 'Teens'}, price: 99.99, quantity: 10},
], product => db.model('product').create(product));

const seedCategories = () => db.Promise.map([
    {name: 'Rings'},
    {name: 'Adult Rings', parentCategory: 1},
    {name: 'Diamond Rings', parentCategory: 1},
    {name: 'Bracelets'},
    {name: 'Baby Bracelets', parentCategory: 4},
    {name: 'Lady Bracelets', parentCategory: 4},
    {name: 'Necklaces'},
    {name: 'Guy Necklace', parentCategory: 7},
    {name: 'Earrings'},
    {name: 'Baby Earrings', parentCategory: 7}
], category => db.model('category').create(category));

const seedProductCategories = () => db.Promise.map([
  {product_id: 1, category_id: 1},
  {product_id: 1, category_id: 2},
  {product_id: 1, category_id: 3},
  {product_id: 4, category_id: 9},
  {product_id: 4, category_id: 10},
  {product_id: 2, category_id: 7},
  {product_id: 2, category_id: 8},
], productCategory => db.model('product_category').create(productCategory));

const seedProductReviews = () => db.Promise.map([
  {title: 'This product is awesome', body: 'super dope product!!! something something something', stars: '5', product_id: 2, user_id: 2},
  {title: 'This product is awesome', body: 'Beautiful Ring!! something something somethingsomething something ', stars: '4', product_id: 4, user_id: 4},
  {title: 'This product is awesome', body: 'aweful worst product ever something something somethingsomething', stars: '1', product_id: 3, user_id: 12},
  {title: 'This product is awesome', body: 'Amazing! something somethingsomethingsomething something something something something something ', stars: '5', product_id: 5, user_id: 8}
], reviews => db.model('product_review').create(reviews));

const seedAddresses = () => db.Promise.map([
  {address1: '150 main street', city: 'Buffalo', state: 'NY', country: 'USA', zipcode: '12345', user_id: 1},
  {address1: '150 main street', address2: '45 grove lane', city: 'Pittsburgh', state: 'PA', country: 'USA', zipcode: '12345', user_id: 2},
  {address1: '10 Hello World ave.', city: 'Los Angeles', state: 'CA', country: 'USA', zipcode: '12345', user_id: 3},
  {address1: '7 My Street Is Cool', city: 'Wayne', state: 'NJ', country: 'USA', zipcode: '12345', user_id: 4},
], addresses => db.model('address').create(addresses));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedProductCategories)
  .then(productCategories => console.log(`Seeded ${productCategories.length} productCategory OK`))
  .then(seedProductReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(seedAddresses)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
