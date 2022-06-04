const router = require("express").Router();
const { get } = require("mongoose");
let stuMarks = require("../models/stuMarkingModel.js");


//Save details
router.route("/add").post((req,res)=>{

    const group_id      = req.body.group_id;
    const group_name    = req.body.group_name;
    const topic         = req.body.topic;
    const topic_status  = req.body.topic_status;
    const marking_type1 = Number(req.body.marking_type1);
    const marking_type2 = Number(req.body.marking_type2);
    const marking_type3 = Number(req.body.marking_type3);
    const total_marks   = Number(req.body.total_marks);
    const evaluation_rep= req.body.evaluation_rep;

    const newstuMarks = new stuMarks({
        group_id,
        group_name,
        topic,
        topic_status,
        marking_type1,
        marking_type2,
        marking_type3,
        total_marks,
        evaluation_rep
    })

    newstuMarks.save().then(()=>{
        res.json("Marks Added")
    }).catch((err)=>{
        console.log(err.message);
    })
        
})

//view details
router.route("/view").get((req,res)=>{
   
    stuMarks.find().then((marks)=>{
        res.json(marks)
    }).catch((err)=>{
        console.log(err.message)
    })
})


//update
router.route("/update/:id").put(async (req,res)=>{
    let groupId=req.params.id;
    const{
        group_id,group_name,topic,topic_status,marking_type1,marking_type2,marking_type3,total_marks,evaluation_rep
    }=req.body;
    const updatemarks={
        group_id,
        group_name,
        topic,
        topic_status,
        marking_type1,
        marking_type2,
        marking_type3,
        total_marks,
        evaluation_rep
    }

    const update= await stuMarks.findByIdAndUpdate(groupId,updatemarks).then(()=>{
        res.status(200).send({status:"Updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in Updating",error:err.message})
    })

    
})

//delete
router.route("/delete/:id").delete(async (req,res)=>{
    let groupId=req.params.id;
    
    await stuMarks.findByIdAndDelete(groupId).then(()=>{
        res.status(200).send({status:"Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in deleting",error:err.message})
    })
})


//get one data
router.route("/get/:id").get(async (req,res)=>{
    let groupId=req.paramsid;

    await stuMarks.findById(groupId).then(()=>{
        res.status(200).send({status:"Success"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in fetching",error:err.message})
    })
})
module.exports = router;