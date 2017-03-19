const db = require('APP/db');
const express = require('express');
const router = module.exports = express.Router();
const Category = require('APP/db/models/category');

router.get('/', (req, res, next) =>
  Category.findAll()
  .then(categories => res.status(200).json(categories))
  .catch(next));

router.get('/rootcategories', (req, res, next) =>
  Category.findAll({
    where: { parentCategory: null }
  })
  .then(categories => res.status(200).json(categories))
  .catch(next));


router.get('/singlecategory/:name', (req, res, next) =>
  Category.findOne({
    where: {name: req.params.name}
  })
  .then(category => res.json(category))
  .catch(next));


router.post('/', (req, res, next) =>
  Category.create(req.body)
  .then(category => res.status(201).json(category))
  .catch(next));


router.put('/:id', (req, res, next) =>
  Category.update( req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then((count, updated)  => {
      res.status(201).json(updated[0]);
    })
    .catch(next));


router.delete('/:id', (req, res, next) =>
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deleted => res.sendStatus(204).end())
  .catch(next));

module.exports = router;
