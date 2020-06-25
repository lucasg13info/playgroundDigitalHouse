const express = require ('express');
const router = express.Router();


router.get('/', (req, res) => {
    
    res.sendFile(__dirname  +'/src/index.html')
    //router.use(router.static(__dirname + '/src/index.js')); 
});


module.exports = router;
