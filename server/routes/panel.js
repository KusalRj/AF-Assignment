const router = require("express").Router();
let Panel = require("../models/panel");

router.route("/add").post(async (req, res) => {
    
    const {group, topicName, member1, member2, member3} = req.body;

    const newPanel = new Panel({
        group,
        topicName,
        member1,
        member2,
        member3
    })

    const panel = await Panel.findOne({group: req.body.group});
    if (panel) {
        console.log(panel)
        return res.status(409).send({ message: "Panel for given Group Name already Exist!"});
    }

    await newPanel.save().then(() => {
        res.json("panel added");
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;