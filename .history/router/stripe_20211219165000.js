const router = require('express').Router();

const stripe = require('stripe')('sk_test_51K8GwIAGouOa8CS5V0v7LgG71hdsbbSSwBH2Ugi1TStcZoEkQ5jIxc10dhYydXbMqpfuG4q9KYCgGn213lkzWcYA00Ke5dq7k2');

stripe.customers.create({
  email: 'customer@example.com',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));

module.exports = router;