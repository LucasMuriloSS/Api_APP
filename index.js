const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.yimfiib.mongodb.net/test`).then(()=>{

    console.log('DB running, starting server')

    const app = express();
    const PORT = process.env.PORT || 3001;
    const cors = require('cors');
    const Agendamento = require('./src/controllers/agenda')

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))

    app.use(Agendamento)

    app.listen(PORT,() =>{
        console.log(`API server is running on port ${PORT}`)
    })


}).catch(err =>{
    console.log('Whoops. Occurred an error while trying connect to DB',err)
})
