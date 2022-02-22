const express = require('express');
const router = express.Router()
const Request = require('./Request')

router.get('/graph' , (req,res)=>{
    Request.result1().then(result =>{
        // console.log(result);
      res.send(result);  
       });
});

router.get('/gmail' , (req,res)=>{
  Request.result2().then(result =>{
      // console.log(result);
    res.send(result);  
  });
});

module.exports = router;