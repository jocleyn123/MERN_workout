const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
require('dotenv').config()

const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('connected to db and listening on port',process.env.PORT)
        })
    })
    .catch((error)=>{    // catch to get all error in this processing,so it can behind the then()
        console.log(error)
    })
