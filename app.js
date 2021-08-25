const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/taskRouter')
const connectDB = require('./db/connect')
require('dotenv').config()

const start = async () =>{
   try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server listening on port 3000`))
   } catch (error) {
    console.log(error)
   }
}
//middleware
app.use(express.json())
//routes 
app.get('/hello',(req,res)=>{
    res.send('Task')
})


app.use('/api/v1/tasks',tasks)

start()
