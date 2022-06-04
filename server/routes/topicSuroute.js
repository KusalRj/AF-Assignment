
const router = require("express").Router();
const { get } = require("mongoose");
let topicSu = require("../models/topicSu.js");


router.route("/").get(async (req, res) => {

    await topicSu.find().then((topics) => {
        res.json(topics);
    }).catch((err) => {
        console.log(err);
    })
})



router.route("/update/:id").put(async (req,res)=>{
    let group_id=req.params.id;
    const{
        groupId,
        groupName,
        topic,
        topicStatus
    }=req.body;
    const updatemarks={
        groupId,
        groupName,
        topic,
        topicStatus
    }

    const update= await topicSu.findByIdAndUpdate(group_id,updatemarks).then(()=>{
        res.status(200).send({status:"Updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in Updating",error:err.message})
    })

    
})
module.exports= router;