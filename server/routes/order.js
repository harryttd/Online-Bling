const db = require('APP/db');
const express = require('express');
const router = module.exports = express.Router();
const Order = require('APP/db/models/order');

router.get('/', function(req, res, next) {
	Order.findAll()
		.then(function(orders) {
			res.status(200).json(orders)
		})
		.catch(next)
});

// router.get('/', (req, res, next) =>
//     Order.findAll()
//     .then(orders => res.status(200).json(orders))
//     .catch(next))

router.get('/:id', function(req, res, next) {
	Order.findById(req.params.id)
		.then(function(order) {
			res.json(order)
		})
		.catch(next)
});


// router.get('/:id', (req, res, next) =>
//     Order.findById(req.params.id)
//     .then(order => res.json(order))
//     .catch(next))

router.post('/', function(req, res, next) {
	Order.create(req.body)
		.then(function(order) {
			res.status(201).json(order)
		})
		.catch(next);
})

// router.post('/', (req, res, next) =>
//     Order.create(req.body)
//     .then(order => res.status(201).json(order))
//     .catch(next))

router.put('/:id', function(req, res, next) {
	Order.update(req.body, 
		{
			where: {
				id: req.params.id
		}
	})
	.then(function(count, updated) {
		res.status(201).json(updated[0])
	})
	.catch(next)
})


// router.put('/:id', (req, res, next) =>
//     Order.update( req.body, 
//     {
//       where: {
//         id: req.params.id
//       }
//     })
//     .then((count, updated)  => {
//       res.status(201).json(updated[0])
//     })
//     .catch(next))

router.delete('/:id', function(req, res, next) {
	Order.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function(deleted) {
		res.status(204).end();
	})
	.catch(next);
})

// router.delete('/:id', (req, res, next) =>
//     Order.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then( deleted => res.sendStatus(204).end())
//     .catch(next));


module.exports = router