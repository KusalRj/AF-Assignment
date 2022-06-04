const router = require("express").Router();
let EvMarking = require("../../models/EVMarking/evMarking");

router.route("/addEvP").post((req,res) => {
    const group_name = req.body.group_name;
    const intro = req.body.intro;    
    const body = req.body.body;
    const conclusion=req.body.conclusion;
    const fluency=req.body.fluency;
    const present=req.body.present;
    const grammar=req.body.grammar;
    const layout=req.body.layout;

    const newEvMarking = new EvMarking({
        group_name,
        intro,
        body,
        conclusion,
        fluency,
        present,
        grammar,
        layout

    })

    newEvMarking.save().then(() => {
        res.json("Evaluation marks Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => {

    EvMarking.find().then((evaluateTopics) => {
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

    const update = await EvMarking.findOneAndUpdate(topic,updateEvaluateTopic)
    .then(() => {
        res.status(200).send({status:"Evaluation update"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })
})

module.exports = router;