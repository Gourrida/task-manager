
const Task = require('../models/Task')

const getAllTasks = (req,res) =>{
    res.send('all items cheri')
}

const createTask = (req,res) =>{
    res.json(req.body)
}

const getTask = (req,res)=>{
      res.json( {id : req.params.id})
}
const updateTask = (req,res)=>{
      res.send('all items cheri')
  
}
const deleteTask = (req,res)=>{
      res.send('all items cheri')
  
}

module.exports = {getAllTasks,
    deleteTask,
    updateTask,
    getTask,
    createTask}