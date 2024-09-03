import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const app=express()
const port=process.env.PORT
const DB_URL=process.env.DB_URL
app.use(express.json())
app.use('/api',web)
connectDB(DB_URL)
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})