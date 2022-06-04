const router = require("express").Router();
let Staff = require("../models/staff");

router.route("/").get(async (req, res) => {
    await Staff.find().then((staffs) => {
        res.json(staffs);
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/delete/:id").delete(async (req, res) => {

    await Staff.findByIdAndDelete(req.params.id).then(() => {
        res.send({status: "user deleted"});
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req, res) => {

    const sID = req.params.id;
    const {id, name, email, position} = req.body;
    
    const update = {
        id,
        name,
        email,
        position
    }

    const data = await Staff.findByIdAndUpdate(sID, update).then(() => {
        res.send({status: "user updated", staff: data});
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;