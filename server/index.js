require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const topicRoutes = require("./routes/topic");
const groupRoutes = require("./routes/group");
const panelRoutes = require("./routes/panel");
//const staffRoutes = require("./routes/staff");
//const adminRoutes = require('./routes/admin');

//const fileuploadRoutes = require("./routes/fileupload");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/group", groupRoutes);
//app.use("/api/admin", adminRoutes);
app.use("/api/panel", panelRoutes);
//app.use("/api/staff", staffRoutes);

//app.use("/api/fileupload", fileuploadRoutes);

// app.use(express.static(path.join(__dirname, '..', 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

const ev_topicRouter = require("./routes/Evaluate_topics/evaluateTopics.js")

app.use("/evTopic",ev_topicRouter);

const ev_markingRouter = require("./routes/EVMarking/evMarking.js")
app.use("/evMarking",ev_markingRouter);

const viewPanel = require("./routes/ViewPanel/viewPanel.js")
app.use("/viewPanel",viewPanel);

const staffRegister = require("./routes/StaffRegister/staffRegister.js")
app.use("/Register",staffRegister);

const port = process.env.PORT || 8082;
app.listen(port, console.log(`Listening on port ${port}...`));
