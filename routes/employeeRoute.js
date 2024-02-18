const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')

router.get('/readall' ,employeeController.readAllRecords)
router.get('/read-one/:id' ,employeeController.readSpecificRecord)
router.post('/add-one' ,employeeController.addRecord)
router.patch('/update-one/:id' ,employeeController.updateRecord)
router.delete('/delete-one/:id' ,employeeController.deleteRecord)

module.exports = router