const mongoose = require('mongoose')


const conn = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGODB)
        console.log('mongo db connected:', con.connection.host)
    }
    catch(err){
        console.log('connection failed', err.message)
    }
}

module.exports = conn