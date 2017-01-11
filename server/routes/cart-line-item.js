const express = require('express');
const CartLineItem = require('APP/db/models/cart_line_item');


module.exports = express.Router()

	.get('/', (req, res, next)=>{
		CartLineItem.findAll()
			.then(res.json)
			.catch(next)
	})

	.param('id', (req, res, next, id)=>{
		CartLineItem.findById(id)
			.then(cartLineItem=>{
				req.cartLineItem = cartLineItem
				next()
			}).catch(next)
	})


	.get('/:id', (req, res, next)=>{
		res.json(req.cartLineItem)
	})

	.post('/', (req, res, next)=>{
		CartLineItem.create(req.body)
			.then(createdLineItem=>{
				res.status(201).json(createdLineItem)
			}).chatch(next)
	})

	.put('/:id', (req, res, next)=>{
		req.cartLineItem.update(req.body)
			.then(updated=>{
					 res.status(202).send(updated)
			}).catch(next)
	})

	.delete('/:id', (req, res, next)=>{
		req.cartLineItem.destroy()
			.then(()=>res.status(204).end())
	})
