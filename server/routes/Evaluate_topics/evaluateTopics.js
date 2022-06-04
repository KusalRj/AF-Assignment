const router = require("express").Router();
let EvaluateTopic = require("../../models/Evaluate_topics/evaluateTopics");

router.route("/add").post((req,res) => {
    const group_name = req.body.group_name;
    const topic_name = req.body.topic_name;    
    const evaluate_detail = req.body.evaluate_detail;
    const panel_member=req.body.panel_member;

    const newEvaluateTopic = new EvaluateTopic({
        group_name,
        topic_name,
        evaluate_detail,
        panel_member
    })

    newEvaluateTopic.save().then(() => {
        res.json("Evaluation Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => {

    EvaluateTopic.find().then((evaluateTopics) => {
        res.json(evaluateTopics)
    }).catch((err) => {
        console.log(err);
    })

})


router.route("/update/:group_name").put(async(req,res) => {
    let topic = req.params.group_name;
    const {group_name,evaluate_detail} = req.body;

    const updateEvaluateTopic = {
        group_name,
        topic_name,
        evaluate_detail
    }

    const update = await EvaluateTopic.findOneAndUpdate(topic,updateEvaluateTopic)
    .then(() => {
        res.status(200).send({status:"Evaluation update"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })
})

module.exports = router;