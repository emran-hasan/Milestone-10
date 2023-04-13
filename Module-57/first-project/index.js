const express  =require('express')
const app = express()
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Hello my first server')
})

app.get('/job', (req,res)=>{
    res.send('This is my second server')
})

app.listen(port, ()=>{
    console.log(`My server running on port number ${port}`);
})