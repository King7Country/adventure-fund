const stripe = require('stripe')('sk_test_51HJjndGLgjtYhs2WjBWX5jVJT8kJ5eaflsdr43Tc2M7yFhuHnkqnFVwb7OUsRTwbvgj5vUkw8wl1T1ClwYdQzRrB00oIW4fjjp')

exports.handler = async function (event) {
  const {
    tokenId,
    email,
    name,
    description,
    amount
  } = JSON.parse(event.body)

  const customer = await stripe.customers.create({
    description: email,
    source: tokenId
  })

  await stripe.charges.create({
    customer: customer.id,
    amount,
    name,
    description,
    currency: 'cad'
  })
}
