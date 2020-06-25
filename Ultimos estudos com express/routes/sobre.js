const express = require('express');
const router = express.Router();


router.get('/sobre', (request, response) => {
    response.end('sobre')
})

module.exports = router;