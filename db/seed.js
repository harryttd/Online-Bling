const db = require('APP/db')
const { User, Product, Category, Address, Order, OrderProduct, Product_Review} = require('APP/db/models');

// db.didSync
// .then(() => db.sync({ force: true }))

//, Order, OrderProduct, Address, Category
let data = {
        userData: [
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
        ],
        productData: [

         {name: 'St Louis', sku: 'GR1', description: {Warranty: 'Lifetime',
         Lens: 'Seafoam Mirrored Lens - Mirrored Lens Care',
         Frame: 'Handcrafted, Acetate Frames',
         Protection: '100% UVA / UVB protection',
         Prescription: 'Ready',
         Size: '46-23-145',
         Case: 'Premium Hard Case',
         Extras: 'Microfiber Cleaning Cloth'}, price: 300.00, quantity: 10, image:'/images/products/StLouis-MatteBlack-Website-Front_large.png'},

         {name: 'CBD', sku: 'GDN1', description: {Warranty: 'Lifetime',
         Lens: 'Grey',
         Hardware: '24K Gold Plated Hardware',
         Frame: 'Handcrafted, Acetate Frames',
         Protection: '100% UVA / UVB protection + AR Coating',
         Prescription: 'Ready',
         Size: '53-22-145',
         Case: 'Premium Hard Case',
         Extras: 'Microfiber Cleaning Cloth'}
         , price: 350.00, quantity: 20, image:'/images/products/CL-10-OysterBlack-Front_285a8f7d-6c3a-4981-a556-942442bfffe6_large.png'},

         {name: 'Orleans', sku: 'DSD1', description: {Warranty: 'Lifetime',
         Lens: 'Rose Mirrored',
         Hardware: 'Rose Gold Plated Titanium',
         Frame: 'Handcrafted, Acetate Frames',
         Protection: '100% UVA / UVB protection + AR Coating',
         Prescription: 'Ready',
         Size: '48-22-145',
         Case: 'Premium Hard Case',
         Extras: 'Microfiber Cleaning Cloth'}
        , price: 280.00, quantity: 50, image:'/images/products/Orleans-24KTitaniumCarnevale-Website-Front_1024x1024.png'},

         {name: 'Franklin', sku: 'BE1', description: {Warranty: 'Lifetime',
         Lens: 'Amber Polarized',
         Hardware: '24K Gold Plated',
         Frame: 'Handcrafted, Acetate Frames',
         Protection: '100% UVA / UVB protection + AR Coating',
         Prescription: 'Ready',
         Size: '49-21-145',
         Case: 'Premium Hard Case',
         Extras: 'Microfiber Cleaning Cloth'}, price: 200.00, quantity: 50, image:'/images/products/Franklin-Champagne24K-Front-Website_large.png'},

         {name: 'Breton', sku: 'DEB1', description: {Warranty: 'Lifetime',
         Lens: 'Green',
         Hardware: '24K Gold Plated',
         Frame: 'Handcrafted, Acetate Frames',
         Protection: '100% UVA / UVB protection + AR Coating',
         Prescription: 'Ready',
         Size: '53-22-145',
         Case: 'Premium Hard Case',
         Extras: 'Microfiber Cleaning Cloth'}
        , price: 100.00, quantity: 10, image:'/images/products/Breton-Black-Website-Front_large.png'},

        {name: 'Conti', sku: 'CB1', description: {Warranty: 'Lifetime',
        Lens: 'Green Polarized',
        Hardware: '24K Gold Plated',
        Frame: 'Handcrafted, Acetate Frames',
        Protection: '100% UVA / UVB protection + AR Coating',
        Prescription: 'Ready',
        Size: '46-24-142',
        Case: 'Premium Hard Case',
        Extras: 'Microfiber Cleaning Cloth'}
        , price: 270.00, quantity: 15, image:'/images/products/KREWE-Conti-Zulu-Sunglasses-Front_large.jpg'}
      ],
      categoryData: [
          {name: 'Mens'},
          {name: 'Womens'},
          {name: 'Mirrored'},
          {name: 'Gold Hardware'},
          {name: 'New Arrivals'}
      ],
      orderData: [
        {total: 10, user_id: 1, shipping_address_id: 1, billing_address_id: 1},
        {total: 20, user_id: 2, shipping_address_id: 2, billing_address_id: 2},
        {total: 30, user_id: 3, shipping_address_id: 3, billing_address_id: 3},
        {total: 40, user_id: 4, shipping_address_id: 4, billing_address_id: 1},
        {total: 50, user_id: 5, shipping_address_id: 4, billing_address_id: 2}
      ],
      productCategoryData: [
        {product_id: 1, category_id: 1},
        {product_id: 1, category_id: 3},
        {product_id: 1, category_id: 4},
        {product_id: 2, category_id: 2},
        {product_id: 3, category_id: 2},
        {product_id: 4, category_id: 2},
        {product_id: 4, category_id: 3},
        {product_id: 4, category_id: 4},
        {product_id: 5, category_id: 1},
        {product_id: 5, category_id: 4},
        {product_id: 6, category_id: 2}
      ],
      productReviewData: [
        {title: 'This product is awesome', body: 'super dope product!!! something something something', stars: '5', product_id: 2, user_id: 2},
        {title: 'This product is awesome', body: 'Beautiful Ring!! something something somethingsomething something ', stars: '4', product_id: 4, user_id: 4},
        {title: 'This product is awesome', body: 'aweful worst product ever something something somethingsomething', stars: '1', product_id: 3, user_id: 12},
        {title: 'This product is awesome', body: 'Amazing! something somethingsomethingsomething something something something something something ', stars: '5', product_id: 5, user_id: 8}
      ],
      addressData: [
        {address1: '150 main street', city: 'Buffalo', state: 'NY', country: 'USA', zipcode: '12345', user_id: 1},
        {address1: '150 main street', address2: '45 grove lane', city: 'Pittsburgh', state: 'PA', country: 'USA', zipcode: '12345', user_id: 2},
        {address1: '10 Hello World ave.', city: 'Los Angeles', state: 'CA', country: 'USA', zipcode: '12345', user_id: 3},
        {address1: '7 My Street Is Cool', city: 'Wayne', state: 'NJ', country: 'USA', zipcode: '12345', user_id: 4},
      ],
      orderProductData: [
        { order_id: 1, product_id: 1, quantity: 10, line_total: 10 * 300.00 },
        { order_id: 1, product_id: 2, quantity: 3, line_total: 3 * 350.00 },
        { order_id: 1, product_id: 3, quantity: 1, line_total: 1 * 280.00 },
        { order_id: 1, product_id: 4, quantity: 2, line_total: 2 * 200 },
        { order_id: 1, product_id: 5, quantity: 1, line_total: 1 * 100.00 }
      ]
    }

    const seedCartLineItem = () => db.Promise.map([
      { quantity: 3, product_id: 1, user_id: 1 }
    ], cartLineItem => db.model('cart_line_item').create(cartLineItem));

    const seedProductCategories = () => db.Promise.map([
      {product_id: 1, category_id: 1},
      {product_id: 1, category_id: 3},
      {product_id: 1, category_id: 4},
      {product_id: 1, category_id: 5},
      {product_id: 2, category_id: 2},
      {product_id: 3, category_id: 2},
      {product_id: 3, category_id: 3},
      {product_id: 3, category_id: 4},
      {product_id: 4, category_id: 1},
      {product_id: 4, category_id: 2},
      {product_id: 4, category_id: 5},
      {product_id: 5, category_id: 1},
      {product_id: 5, category_id: 2},
      {product_id: 5, category_id: 5},
      {product_id: 6, category_id: 2}
    ], productCategory => db.model('product_category').create(productCategory));


    db.didSync
      .then(() => db.sync({force: true}))
      .then(()=>Product.bulkCreate(data.productData))
      .then(()=>User.bulkCreate(data.userData))
      .then(()=>Category.bulkCreate(data.categoryData))
      .then(()=>Address.bulkCreate(data.addressData))
      .then(()=>Order.bulkCreate(data.orderData))
      .then(()=>OrderProduct.bulkCreate(data.orderProductData))
      .then(()=>Product_Review.bulkCreate(data.productReviewData))
      .then(seedProductCategories)
      .then(productCategories => console.log(`Seeded ${productCategories.length} productCategory OK`))
      .then(seedCartLineItem)
      .then(cartLineItems => console.log(`Seeded ${cartLineItems.length} cartLineItems OK`))

      // .then(()=>db.model('product_category').create(data.productCategoryData))

      // .then(users => console.log(`Seeded ${users.length} users OK`))
      // //.then(seedProducts)
      // //.then(products => console.log(`Seeded ${products.length} products OK`))
      // .then(seedCategories)
      // .then(categories => console.log(`Seeded ${categories.length} categories OK`))
      // .then(seedProductCategories)
      // .then(productCategories => console.log(`Seeded ${productCategories.length} productCategory OK`))
      // .then(seedProductReviews)
      // .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
      // .then(seedAddresses)
      // .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
      // .then(seedOrders)
      // .then(orders => console.log(`Seeded ${orders.length} orders OK`))
      .catch(error => console.error(error))
      .finally(() => db.close());


//User.bulkCreate(data.userData)
// .then(res=>Product.bulkCreate(data.productData))
// .then(res=>Category.bulkCreate(data.categoryData))

// .then(res=>Order.bulkCreate(data.orderData))
// .then(res=>OrderProduct.bulkCreate(data.orderProductData))
//
// .then(res=>Address.bulkCreate(data.addressData))

//
// User.bulkCreate(data.userData)
// .then(res=>Address.bulkCreate(data.addressData))
// .then(res=>Order.bulkCreate(data.orderData))
// .then(res=>Product.bulkCreate(data.productData))
// .then(res=>OrderProduct.bulkCreate(data.orderProductData))

// const seedUsers = () => db.Promise.map([
//  {name: 'so may', email: 'god@example.com', password: '1234'},
//  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
//  {name: 'Lida Cannon', email: 'kalo@sokum.com', password: '1234'},
//  {name: 'Chase Mitchell', email: 'apoinpe@bij.io', password: '1234'},
//  {name: 'Gertrude Morgan', email: 'ekisutjul@ahtove.com', password: '1234'},
//  {name: 'Josie Vargas', email: 'zuav@om.gov', password: '1234'},
//  {name: 'Julian Soto', email: 'uzoho@hu.gov', password: '1234'},
//  {name: 'Vincent Cohen', email: 'wu@tonin.edu', password: '1234'},
//  {name: 'Tillie Higgins', email: 'acubizfew@pesohu.org', password: '1234'},
//  {name: 'Frank Russell', email: 'seja@licgolul.org', password: '1234'},
//  {name: 'Franklin Bishop', email: 'ogijeaja@veifus.com', password: '1234'},
//  {name: 'Iva Carson', email: 'nikok@ejrib.gov', password: '1234'}
// ], user => db.model('users').create(user));

// const seedOrders = () => db.Promise.map([
//   {total: 10, user_id: 1, shipping_address_id: 1, billing_address_id: 1},
//   {total: 20, user_id: 2, shipping_address_id: 2, billing_address_id: 2},
//   {total: 30, user_id: 3, shipping_address_id: 3, billing_address_id: 3},
//   {total: 40, user_id: 4, shipping_address_id: 4, billing_address_id: 1},
//   {total: 50, user_id: 5, shipping_address_id: 4, billing_address_id: 2}
// ], order => db.model('order').create(order));


// {Warranty: 'Lifetime',
// Lens: 'Seafoam Mirrored Lens - Mirrored Lens Care',
// Frame: 'Handcrafted, Acetate Frames',
// Protection: '100% UVA / UVB protection',
// Prescription: 'Yes',
// Size: '46-23-145',
// Case: 'Premium Hard Case',
// Extras: 'Microfiber Cleaning Cloth'}

// {Warranty: 'Lifetime',
// Lens: 'Green',
// Hardware: '24K Gold Plated',
// Frame: 'Handcrafted, Acetate Frames',
// Protection: '100% UVA / UVB protection + AR Coating',
// Prescription: 'Ready',
// Size: '53-22-145',
// Case: 'Premium Hard Case',
// Extras: 'Microfiber Cleaning Cloth'}


// const seedProducts = () => db.Promise.map([
//
//  {name: 'St Louis', sku: 'GR1', description: {Warranty: 'Lifetime',
//  Lens: 'Seafoam Mirrored Lens - Mirrored Lens Care',
//  Frame: 'Handcrafted, Acetate Frames',
//  Protection: '100% UVA / UVB protection',
//  Prescription: 'Ready',
//  Size: '46-23-145',
//  Case: 'Premium Hard Case',
//  Extras: 'Microfiber Cleaning Cloth'}, price: 299.99, quantity: 10, image:'/images/products/StLouis-MatteBlack-Website-Front_large.png'},
//
//  {name: 'CBD', sku: 'GDN1', description: {Warranty: 'Lifetime',
//  Lens: 'Grey',
//  Hardware: '24K Gold Plated Hardware',
//  Frame: 'Handcrafted, Acetate Frames',
//  Protection: '100% UVA / UVB protection + AR Coating',
//  Prescription: 'Ready',
//  Size: '53-22-145',
//  Case: 'Premium Hard Case',
//  Extras: 'Microfiber Cleaning Cloth'}
//  , price: 349.99, quantity: 20, image:'/images/products/CL-10-OysterBlack-Front_285a8f7d-6c3a-4981-a556-942442bfffe6_large.png'},
//
//  {name: 'Orleans', sku: 'DSD1', description: {Warranty: 'Lifetime',
//  Lens: 'Rose Mirrored',
//  Hardware: 'Rose Gold Plated Titanium',
//  Frame: 'Handcrafted, Acetate Frames',
//  Protection: '100% UVA / UVB protection + AR Coating',
//  Prescription: 'Ready',
//  Size: '48-22-145',
//  Case: 'Premium Hard Case',
//  Extras: 'Microfiber Cleaning Cloth'}
// , price: 279.99, quantity: 50, image:'/images/products/Orleans-24KTitaniumCarnevale-Website-Front_1024x1024.png'},
//
//  {name: 'Franklin', sku: 'BE1', description: {Warranty: 'Lifetime',
//  Lens: 'Amber Polarized',
//  Hardware: '24K Gold Plated',
//  Frame: 'Handcrafted, Acetate Frames',
//  Protection: '100% UVA / UVB protection + AR Coating',
//  Prescription: 'Ready',
//  Size: '49-21-145',
//  Case: 'Premium Hard Case',
//  Extras: 'Microfiber Cleaning Cloth'}, price: 200.00, quantity: 50, image:'/images/products/Franklin-Champagne24K-Front-Website_large.png'},
//
//  {name: 'Breton', sku: 'DEB1', description: {Warranty: 'Lifetime',
//  Lens: 'Green',
//  Hardware: '24K Gold Plated',
//  Frame: 'Handcrafted, Acetate Frames',
//  Protection: '100% UVA / UVB protection + AR Coating',
//  Prescription: 'Ready',
//  Size: '53-22-145',
//  Case: 'Premium Hard Case',
//  Extras: 'Microfiber Cleaning Cloth'}
// , price: 99.99, quantity: 10, image:'/images/products/Breton-Black-Website-Front_large.png'},
//
// {name: 'Conti', sku: 'CB1', description: {Warranty: 'Lifetime',
// Lens: 'Green Polarized',
// Hardware: '24K Gold Plated',
// Frame: 'Handcrafted, Acetate Frames',
// Protection: '100% UVA / UVB protection + AR Coating',
// Prescription: 'Ready',
// Size: '46-24-142',
// Case: 'Premium Hard Case',
// Extras: 'Microfiber Cleaning Cloth'}
// , price: 270.00, quantity: 15, image:'/images/products/KREWE-Conti-Zulu-Sunglasses-Front_large.jpg'}
//
// ], product => db.model('product').create(product));

// const seedCategories = () => db.Promise.map([
//     {name: 'Mens'},
//     {name: 'Womens'},
//     {name: 'Mirrored'},
//     {name: 'Gold Hardware'}
// ], category => db.model('category').create(category));

// const seedProductCategories = () => db.Promise.map([
//   {product_id: 1, category_id: 1},
//   {product_id: 1, category_id: 3},
//   {product_id: 1, category_id: 4},
//   {product_id: 2, category_id: 2},
//   {product_id: 3, category_id: 2},
//   {product_id: 4, category_id: 2},
//   {product_id: 4, category_id: 3},
//   {product_id: 4, category_id: 4},
//   {product_id: 5, category_id: 1},
//   {product_id: 5, category_id: 4},
//   {product_id: 6, category_id: 2}
// ], productCategory => db.model('product_category').create(productCategory));

// const seedProductReviews = () => db.Promise.map([
//   {title: 'This product is awesome', body: 'super dope product!!! something something something', stars: '5', product_id: 2, user_id: 2},
//   {title: 'This product is awesome', body: 'Beautiful Ring!! something something somethingsomething something ', stars: '4', product_id: 4, user_id: 4},
//   {title: 'This product is awesome', body: 'aweful worst product ever something something somethingsomething', stars: '1', product_id: 3, user_id: 12},
//   {title: 'This product is awesome', body: 'Amazing! something somethingsomethingsomething something something something something something ', stars: '5', product_id: 5, user_id: 8}
// ], reviews => db.model('product_review').create(reviews));
//
// const seedAddresses = () => db.Promise.map([
//   {address1: '150 main street', city: 'Buffalo', state: 'NY', country: 'USA', zipcode: '12345', user_id: 1},
//   {address1: '150 main street', address2: '45 grove lane', city: 'Pittsburgh', state: 'PA', country: 'USA', zipcode: '12345', user_id: 2},
//   {address1: '10 Hello World ave.', city: 'Los Angeles', state: 'CA', country: 'USA', zipcode: '12345', user_id: 3},
//   {address1: '7 My Street Is Cool', city: 'Wayne', state: 'NJ', country: 'USA', zipcode: '12345', user_id: 4},
// ], addresses => db.model('address').create(addresses));

// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(seedUsers)
//   .then(users => console.log(`Seeded ${users.length} users OK`))
//   //.then(seedProducts)
//   //.then(products => console.log(`Seeded ${products.length} products OK`))
//   .then(seedCategories)
//   .then(categories => console.log(`Seeded ${categories.length} categories OK`))
//   .then(seedProductCategories)
//   .then(productCategories => console.log(`Seeded ${productCategories.length} productCategory OK`))
//   .then(seedProductReviews)
//   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
//   .then(seedAddresses)
//   .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
//   .then(seedOrders)
//   .then(orders => console.log(`Seeded ${orders.length} orders OK`))
//   .catch(error => console.error(error))
//   .finally(() => db.close());
