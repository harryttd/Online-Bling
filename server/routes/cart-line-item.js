'use strict';
const express = require('express');
const CartLineItem = require('APP/db/models/cart_line_item');
const Product = require('APP/db/models/product');

module.exports = express.Router()

	.get('/', (req, res, next) => {
		CartLineItem.findAll({
			include: [{ model: Product }]
		})
		.then(products => res.json(products))
		.catch(next);
	})

	.param('id', (req, res, next, id) => {
		CartLineItem.findById(id)
			.then(cartLineItem => {
				req.cartLineItem = cartLineItem;
				next();
			})
			.catch(next);
	})


	.get('/:id', (req, res, next) => {
		res.json(req.cartLineItem);
	})

	.post('/', (req, res, next) => {
		CartLineItem.findOne({
			where: { product_id: req.body.id }
		})
		.then(item => {
			if (item) {
				return item.update({ quantity: item.quantity + 1 });
			}
			else {
				CartLineItem.create({
					quantity: 1,
					product_id: req.body.id
				})
				.then(createdLineItem => {
					// console.log(createdLineItem);
					// createdLineItem.getProduct().then(console.log)
					CartLineItem.findOne({
						where: { id: createdLineItem.id },
						include: [{ model: Product }]
					})
					.then(itemWithProduct => res.status(201).json(itemWithProduct));
				});
			}
		})
		.catch(next);
	})

	.put('/:id', (req, res, next) => {
		req.cartLineItem.update(req.body)
			.then(updated => {
					 res.status(202).send(updated);
			}).catch(next);
	})

	.delete('/:id', (req, res, next) => {
		req.cartLineItem.destroy()
		.then(() => res.sendStatus(204));
	});
