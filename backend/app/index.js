const express = require('express')
const router = express.Router()
const linker = require('../lib/linker')

router.get('/', (req, res, next) => {
  res.json({
    _links: {
      self: {
        href: linker(req)
      },
      messages: {
        href: linker(req, '/api/messages')
      },
      people: {
        href: linker(req, '/api/people')
      },
      products: {
        href: linker(req, '/api/products')
      },
      items: {
        href: linker(req, '/api/items')
      },
    }
  })
})

module.exports = router
