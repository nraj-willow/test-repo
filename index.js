var express = require('express');


let app = express();

app.get('/*',(req,res)=>{
  console.log(req)
  res.send('Get')
})

app.post('/*',(req,res)=>{
  console.log(req)
  res.send({method:'Post'})
})

app.listen(80)
