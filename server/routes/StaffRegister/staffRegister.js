const router = require("express").Router();
let StaffRegister = require("../../models/StaffRegister/staffRegister");

router.route("/addStaff").post((req,res) => {
    const S_name = req.body.S_name;
    const email = req.body.email;    
    const position = req.body.position;
    const password=req.body.password;

    const newStaffRegister = new StaffRegister({
        S_name,
        email,
        position,
        password

    })

    newStaffRegister.save().then(() => {
        res.json("Staff profile created successfully")
    }).catch((err) => {
        console.log(err);
    })
})
  
  router.get("/getEmail/:email", (req, res) => {
    User.find({ email: req.params.email })
      .then((details) => res.json(details))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  module.exports = router;