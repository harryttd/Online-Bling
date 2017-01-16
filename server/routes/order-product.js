const db = require('APP/db');
const express = require('express');
const router = module.exports = express.Router()
const OrderProduct = require('APP/db/models/order_product');

module.exports = express.Router()

	.get('/', (req, res, next) => {
		OrderProduct.findAll()
			.then(orderProducts => res.json(orderProducts))
			.catch(next)
	})
	.get('/:id', (req, res, next) => {
    OrderProduct.findById(req.params.id)
    .then(orderProduct => res.json(orderProduct))
		.catch(next)
	})

  .get('/order/:orderId', (req, res, next) => {
		OrderProduct.findAll({
			where: {
				order_id: req.params.orderId
      }
    })
    .then(orderProduct => res.json(orderProduct))
		.catch(next)
	})


	.post('/', (req, res, next)=>{
		OrderProduct.create(req.body)
		.then(createdOrderProduct => {
			res.status(201).json(createdOrderProduct)
		})
    .catch(next)
	})

	.put('/:id', (req, res, next)=>{
    OrderProduct.findById(req.params.id)
    .then(orderProduct => orderProduct.update(req.body))
		.then(updatedOrderProduct => {
				 res.status(202).send(updatedOrderProduct)
			})
    .catch(next)
	})

	.delete('/:id', (req, res, next)=>{
    OrderProduct.findById(req.params.id)
    .then(orderProduct => orderProduct.destroy())
		.then( () => res.status(204).end())
		.catch(next)
	})
