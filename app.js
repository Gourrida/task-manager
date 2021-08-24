const express = require('express')

const app = express()

const port = 3000

//routes 
app.get('/hello',(req,res)=>{
    res.send('Task')
})

console.log('Task manager App')

app.listen(port,console.log(`server listening on port 3000`))