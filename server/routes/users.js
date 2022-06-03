const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "Student with given email id is already Exist!" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "Student profile created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/getEmail/:email", (req, res) => {
  User.find({ email: req.params.email })
    .then((details) => res.json(details))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get(async (req, res) => {
    
  await User.find().then((users) => {
      res.json(users);
  }).catch((err) => {
      console.log(err);
  })
})

router.route("/delete/:id").delete(async (req, res) => {

  await User.findByIdAndDelete(req.params.id).then(() => {
      res.send({status: "user deleted"});
  }).catch((err) => {
      console.log(err);
  })
})

router.route("/update/:id").put(async (req, res) => {
  
  const sID = req.params.id;
  const {firstName, lastName, faculty, regNum, email} = req.body;

  const update = {
    firstName,
    lastName,
    faculty,
    regNum,
    email
  }

  const data = await User.findByIdAndUpdate(sID, update).then(() => {
      res.send({status: "user updated", user: data});
  }).catch((err) => {
      console.log(err);
  })
})

module.exports = router;
