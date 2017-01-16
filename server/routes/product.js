const { Product, Category, Product_Review } = require('APP/db/models');
const express = require('express');

module.exports = express.Router()
  .get('/', (req, res, next) =>
    Product.findAll()
    .then(products => res.json(products))
    .catch(next))


  //Specific productId will render corresponding product reviews
  .get('/:productId', (req, res, next) =>
    Product.findOne({
      where: {id: req.params.productId},
      include: [
        {model: Product_Review}
      ]
    })
    .then(product => {
      res.json(product)
    })
    .catch(next))

  .post('/:productId', (req, res, next) => 
    Product.findById(req.params.productId)
    .create(Product_Review)
    .then(product => {
      res.status(201).json(product)
    })
    .catch(next)
  )

  .put('/:productId', (req, res, next) => 
    Product.findByOne({
      where: {id: req.params.productId},
    })
  )

  
  .get('/category/:categoryName', (req, res, next) =>
    Category.findOne({
      where: { name: req.params.categoryName }
    })
    .then(category => category.getProducts())
    .then(products => res.json(products))
    .catch(next))

  .post('/', (req, res, next) =>
    // Set up auth stuff
    Product.create(req.body)
    .then(newProduct => res.status(201).json(newProduct))
    .catch(next))

  .put('/:productId', (req, res, next) =>
    // Set up auth stuff
    Product.findById(req.params.productId)
    .then(targetProduct => targetProduct.update(req.body))
    .then(updatedProduct => res.status(202).send(updatedProduct))
    .catch(next))

  .delete('/:productId', (req, res, next) =>
    // Set up auth stuff
    Product.findById(req.params.productId)
    .then(targetProduct => targetProduct.destroy())
    .then(() => res.sendStatus(204))
    .catch(next));
