const router = require("express").Router();
const bcrypt = require("bcrypt");
const Staff = require("../models/staff");

router.route("/check").post( async (req, res) => {
    
    console.log(req.body);
    console.log(req.body.userName);

    const user = await Staff.findOne({S_name: req.body.userName});

    if (!user)
        return res.send({ message: "Your user name or Password is incorrect please check again" });

    const validPW = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!validPW)
        return res.send({ message: "Your UserName or Password is incorrect  please check again" });

    return res.send({ message: "Login Successfull" });
})

module.exports = router;