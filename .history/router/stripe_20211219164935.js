const router = require('express').Router();

const stripe = require('stripe')('sk_test_...');

stripe.customers.create({
  email: 'customer@example.com',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));

module.exports = router;