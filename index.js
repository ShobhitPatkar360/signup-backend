// writing code in index.js file -------------------------------------------------------------

const express = require("express");
const ChannelModel = require('./channel')

// connect from database
const mongoose = require("mongoose");
// connection string
const dbUrl =
  "mongodb+srv://shobhit333:wOicKXfzqNcjTzAu@cluster0.8ghuwkj.mongodb.net/sp-database?retryWrites=true&w=majority";
// connection parameters
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

// express executives
const app = express();
// parsing request body
app.use(express.json());
//port
const PORT = 7000;




// making api
app.post('/insert', async(req,resp)=> {
    
    let dbConnection = await mongoose.connect(dbUrl, connectionParams);
    let data = new ChannelModel(req.body);
    let result = await data.save();

    console.log(result);
    resp.send(result);    
})





// lintening over the port
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
































// var express = require("express")
// var bodyParser = require("body-parser")
// var mongoose = require("mongoose")

// const app = express()

// app.use(bodyParser.json())
// app.use(express.static('public'))
// app.use(bodyParser.urlencoded({
//     extended:true
// }))

// mongoose.connect('mongodb://localhost:27017/mydb',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in Connecting to Database"));
// db.once('open',()=>console.log("Connected to Database"))

// app.post("/sign_up",(req,res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var phno = req.body.phno;
//     var password = req.body.password;

//     var data = {
//         "name": name,
//         "email" : email,
//         "phno": phno,
//         "password" : password
//     }

//     db.collection('users').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });

//     return res.redirect('signup_success.html')

// })


// app.get("/",(req,res)=>{
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })
//     return res.redirect('index.html');
// }).listen(3000);


// console.log("Listening on PORT 3000");