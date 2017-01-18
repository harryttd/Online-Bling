const { Product, Category, Product_Review, User } = require('APP/db/models');
const express = require('express');

module.exports = express.Router()
  .get('/', (req, res, next) =>
    Product.findAll()
    .then(products => res.json(products))
    .catch(next))

  .get('/:productId', (req, res, next) =>
   Product.findOne({
     where: {id: req.params.productId},
     include: [
       { model: Product_Review,
          include: [
            {model: User}
          ]
       }
     ]
   })
   .then(product => {
      res.json(product)
   })
   .catch(next))


  // .post('/:productId', (req, res, next) =>
  //   Product.findbyId(req.params.productId)
  //   .create(Product_Review)
  //   .then(product => {
  //     res.status(201).json(Product_Review)
  //   })
  //   .catch(next)
  // )

  // .put('/:productId/:productReviewId', (req, res, next) =>
  //   Product_Review.findById(req.params.productReviewId)
  //   .then((count, updated) =>
  //     res.status(201).json(updated[0])
  //   )
  //   .catch(next)
  // )

  // .delete('/:productId/:productReviewId', (req, res, next) =>
  //   Product_Review.destory({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(deleted => res.sendStatus(204).end())
  //   .catch(next)
  // )

  .get('/category/:categoryName', (req, res, next) =>
    Category.findOne({
      where: { name: req.params.categoryName }
    })
    .then( category => {
      console.log("this is the category api call", category)
      if (category) {
        // console.log('I am getting products')
        return category.getProducts()
      } else {
        // console.log('I am getting nothing')
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
    .catch(next))

  //Create delete route for specific review in a single product page
  .delete('/:productId/', (req, res, next) =>
    Product.findOne({
      where: {id: req.params.productId},
      include: [
        {mode: Product_Review}
      ]
    })
    .then(targetProductReview => targetProductReview.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
  )
