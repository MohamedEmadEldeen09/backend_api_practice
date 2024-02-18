
const employeeModel = require('../models/employeeModel')

//get 
const readAllRecords =async (req , res)=>{
    const allEmployees =await employeeModel.readAllRecords()
    res.json(allEmployees) 
}

//get by id 
const readSpecificRecord = async (req , res)=>{
    const {id} = req.params
    const targetEmployee = await employeeModel.readSpecificRecord(id)
    res.json(targetEmployee)
}

//add
const addRecord =async (req , res)=>{
    const newEmployee = req.body
    const result = await employeeModel.addRecord(newEmployee)
    res.json(result)
}

//update
const updateRecord =async (req , res)=>{
    const updatedObject = req.body
    const {id} = req.params
    const result = await employeeModel.updateRecord(updatedObject , id)
    res.json(result)
}

//delete
const deleteRecord = async (req , res)=>{
    const {id} = req.params
    const result = await employeeModel.deleteRecord(id)
    res.json(result)
}

module.exports = {
    readAllRecords,
    readSpecificRecord,
    addRecord,
    updateRecord,
    deleteRecord
}