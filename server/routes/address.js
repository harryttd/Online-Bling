const { Address, User } = require('APP/db/models');
const express = require('express');

module.exports = express.Router()
  .get('/', (req, res, next) =>
    Address.findAll()
    .then(address => res.json(address))
    .catch(next))
  .get('/:addressId', (req, res, next) =>
    Address.findById(req.params.addressId)
    .then(address => res.json(address))
    .catch(next))
  .get('/user/:userId', (req, res, next) =>
    Address.findAll({
      where: { user_id: req.params.userId }
    })
    .then(address => res.json(address))
    .catch(next))
  .post('/', (req, res, next) =>
    // Set up auth stuff
    Address.create(req.body)
    .then(newAddress => res.status(201).json(newAddress))
    .catch(next))
  .put('/:addressId', (req, res, next) =>
    // Set up auth stuff
    Address.findById(req.params.addressId)
    .then(targetAddress => targetAddress.update(req.body))
    .then(updatedAddress => res.status(202).send(updatedAddress))
    .catch(next))
  .delete('/:addressId', (req, res, next) =>
    // Set up auth stuff
    Address.findById(req.params.addressId)
    .then(targetAddress => targetAddress.destroy())
    .then(() => res.sendStatus(204))
    .catch(next));
