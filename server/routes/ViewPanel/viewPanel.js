const router = require("express").Router();
let ViewPanel = require("../../models/ViewPanel/viewPanel");

router.route("/").get((req,res) => {

    ViewPanel.find().then((viewPanels) => {
        res.json(viewPanels)
    }).catch((err) => {
        console.log(err);
    })

})


module.exports = router;