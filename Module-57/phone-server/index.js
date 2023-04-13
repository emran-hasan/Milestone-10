const express = require('express')
const app =express();
const phones =require('./phones.json')
const port =4000;

 app.get('/',(req, res)=>{
    res.send('This is phone server Now it is updated with nodemon hahah')
 })

 app.get('/job', (req,res)=>{
    res.send('This is phone another server!')
 })
 app.get('/phones', (req, res) =>{
    res.send(phones)
 })
app.get('/phones/:id', (req, res) =>{
    const id =parseInt(req.params.id)
    console.log('i need data for id: ', id);
    const phone = phones.find(phone => phone.id === id) || {}
    res.send(phone)
})

//  app.get('/phones/:id', (req, res) =>{
//     const id =req.params.id
//     const phone= phones.find(phone => phone.id ===id) || {}
//     res.send(phone)
//  })

 app.listen(port, ()=>{
    console.log(`My phone app running in port: ${port}`);
 })

