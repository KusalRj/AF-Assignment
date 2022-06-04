const exprss = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");
//const Msg= require("./models/messages");
//const io=require('socket.io')(3000);
const dotenv= require("dotenv");
const app=exprss();
require("dotenv").config();

const PORT =process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL= process.env.DB_CONET;

mongoose.connect(URL,{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    //useFindAndModify:false
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb Coneection sucsess")
});


const stumakingRouter = require("./routes/stuMarkingRoute.js");
const topicAcceptRout = require("./routes/topicAcceptRout.js");
const topicSuroute = require("./routes/topicSuroute.js")
app.use("/stumarks",stumakingRouter);
app.use("/accepttopics",topicAcceptRout);
app.use("/edittopic",topicSuroute);


/*
io.on('connection',(socket)=>{
    Msg.find().then(result=>{
        socket.emit('output-message',result)
    })
    console.log("User connected");
    socket.emit('message','Hello');
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    });
    socket.on('chatmessage',msg=>{
        const message=new Msg({msg:msg});
        message.save().then(()=>{
            io.emit('message',msg)
        })
    })
})

*/

app.listen(PORT,()=>{
    console.log(`Server is runing in port ${PORT}`)
})

//mongodb+srv://kusalr:kusalr@local.5g6wv.mongodb.net/LocalDB?retryWrites=true&w=majority