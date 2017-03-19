const db = require('APP/db');
const express = require('express');
const router = module.exports = express.Router()
const productReview = require('APP/db/models/product_review');

router.get('/', (req, res, next) =>
  productReview.findAll()
  .then(productReviews => res.status(200).json(productReviews))
  .catch(next))

router.get('/:id', (req, res, next) =>
  productReview.findById(req.params.id)
  .then(productReview => res.json(productReview))
  .catch(next))

router.post('/', (req, res, next) =>
  productReview.create(req.body)
  .then(productReview => res.status(201).json(productReview))
  .catch(next))

router.put('/:id', (req, res, next) =>
  productReview.update(req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then((count, updated) =>
    res.status(201).json(updated[0])
  )
  .catch(next))

// router.put('/:id', (req, res, next) =>
// 	productReview.update(req.body,
// 	{
// 		where: {
// 			id: req.params.id
// 		}
// 	})
// 	.then(updated => {
// 		res.status(202).send(updated)
// 	}).catch(next)
// )


router.delete('/:id', (req, res, next) =>
  productReview.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deleted => res.sendStatus(204).end())
  .catch(next));

module.exports = router;
