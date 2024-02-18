
const db = require('../config/database_connection')
require('dotenv').config()

//read all employees
const readAllRecords =async ()=>{
    try {
        const [results , _] =await db.execute(process.env.READ_ALL)
        return {
            state:"success",
            message:"",
            results
        }
    } catch (error) {
        console.log(error.message); 
        return {
            state:"error",
            message:error.message
        }      
    }
}

//find specific employee
const readSpecificRecord = async (id)=>{
    try {
        const [results , _] =await db.execute(process.env.READ_ONE,[id])
        if(results.length > 0){
            return {
                state:"success",
                message:"user founded successfully",
                results
            }
        }
        return {
            state:"success",
            message:"user is not exist",
        }        
    } catch (error) {
        console.log(error.message); 
        return {
            state:"error",
            message:error.message
        }
    }
}

//save new employee
const addRecord = async (newEmployee)=>{
    const {emp_name , emp_email , emp_salary} = newEmployee
    try {
        const [results , _] =await db.execute(process.env.ADD_NEW ,
            [emp_name , emp_email , emp_salary])  
        return {
            state : "success", 
            message : "user has been added successfully!" , 
            results
        }
    } catch (error) {
        console.log(error.message); 
        return {
            state:"error",
            message:error.message
        }
    }
}

//update specific employee
const updateRecord =async (updatedObject , id)=>{
    try {
        let queryForUpdate = process.env.UPDATE_ONE_PART1
        Object.keys(updatedObject).forEach((key , index)=>{             
            if(index == Object.keys(updatedObject).length-1) queryForUpdate+=` ${key}=? `
            else queryForUpdate+=` ${key}=?,`                     
        })

        queryForUpdate += process.env.UPDATE_ONE_PART2

        let valuesFromBody = Object.values(updatedObject)

        const [results,_] =await db.execute(queryForUpdate , [...valuesFromBody , id])
        if( results.affectedRows == 0){
            return {
                state:"success",
                message:"user is not exist",
            }
        }
        return {
            state : "success", 
            message : "user has been partially updataed successfully!",
            results
        }  
    } catch (error) {
        console.log(error.message); 
        return {
            state:"error",
            message:error.message
        }
    }   
}

//delete specific employee
const deleteRecord =async (id)=>{
    try {
        const [results , _] =await db.execute(process.env.DELETE_ONE , [id])
        if(results.affectedRows == 0){
            return {
                state:"success",
                message:"user is not exist",
            }
        }
        return {
            state : "success", 
            message : "user has been deleted successfully!",
            results
        }  
    }catch (error) {
        console.log(error.message); 
        return {
            state:"error",
            message:error.message
        }
    }   
}

module.exports = {
    readAllRecords,
    readSpecificRecord,
    addRecord,
    updateRecord,
    deleteRecord
}