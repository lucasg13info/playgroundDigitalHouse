// const express = require ('express');
// const router = express.Router();


// router.get('/contatos/:id', (req,res) =>{
//     req.params.id ("Rota 1")
// });


// module.exports = router;


const express = require ('express');
const  router = express.Router();


router.get('/about', (req,res)=>{
    res.send('about')
})

module.exports = router;