const express = require('express')
const app = express()
require('dotenv').config()

//----midllwares-----
app.disable('X-Powered-By')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//---------

//-----routes-------
//employee route
app.use("/api/employees" , require('./routes/employeeRoute'))
//-------

app.listen( process.env.PORT || 3001,()=>{
    console.log('Backend server is runing on port '+process.env.PORT || 3001);
})