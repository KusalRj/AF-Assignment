const router = require("express").Router();
const { get } = require("mongoose");
let topics= require("../models/topicAccept.js");

router.route("/add").post((req,res)=>{

    const group_id      = req.body.group_id;
    const group_name    = req.body.group_name;
    const topic         = req.body.topic;
    const topic_status  = req.body.topic_status;
   

    const newsTopics = new topics({
        group_id,
        group_name,
        topic,
        topic_status,
     
    })

    newsTopics.save().then(()=>{
        res.json("Marks Added")
    }).catch((err)=>{
        console.log(err.message);
    })
        
})

module.exports = router;