const {createPool} = require('mysql2')
require('dotenv').config()

const db = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: null,
    database: process.env.DATABASE_NAME,
    connectionLimit:10
})

db.getConnection(()=>{
    console.log("connected to the database successfully");
})

module.exports = db.promise();