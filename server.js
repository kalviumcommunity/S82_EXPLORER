const express =require('express')
require('dotenv').config()
const cors = require('cors')
const port=process.env.PORT || 2222
const mongoose = require('mongoose')
const app =express()

const db = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI),
        console.log("Connected to mongodb");
    }
    catch(e){
        console.error("Failed to connect mongodb")
    }
}
db()

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(400).send('hello world')
})

app.listen(port,()=>{
    console.log(`server: connected successfully at ${port}`)
})