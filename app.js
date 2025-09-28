const express=require('express')
const app= express()
const dotenv=require('dotenv')
dotenv.config()
app.get('/',(req,res)=>{
    res.send("Success")
})
PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Succesfully started at PORT:${PORT}`)
})