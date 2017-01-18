const { Product, Category } = require('APP/db/models');
const express = require('express');

module.exports = express.Router()
  .get('/', (req, res, next) =>
    Product.findAll()
    .then(products => res.json(products))
    .catch(next))
  .get('/:productId', (req, res, next) =>
    Product.findById(req.params.productId)
    .then(product => res.json(product))
    .catch(next))
  .get('/category/:categoryName', (req, res, next) =>
    Category.findOne({
      where: { name: req.params.categoryName }
    })
    .then( category => {
      console.log("this is the category api call", category)
      if (category) {
        console.log('I am getting products')
        return category.getProducts()
      } else {
        console.log('I am getting nothing')
        return []
      }
    })
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
