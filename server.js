const express = require ('express');
const connect =require('./config/connectDB')

//instanciation
const app =express();
//middelware
app.use(express.json())

//connect to DB
connect()
//routes
app.use("/api/contacts",require("./routes/contact"))

//port
const port =5000;
app.listen(port,err=>{
    err? console.log(err):console.log(`server is running on port ${port}`)
})
