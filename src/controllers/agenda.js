const express = require('express');
const router = express.Router();
const Agenda = require('../models/agenda')



router.post('/create', async (req,res)=>{

    const {day,hour,duration,method,link,created} = req.body

    try{
        agenda = await Agenda.create({day:day,hour:hour,duration:duration,method:method,link:link,created:created})
    }catch(error){
        console.log(`[POST API CREATE] =>`,error)
    }

    res.send('Created')
})

module.exports = router