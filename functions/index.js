const functions = require("firebase-functions")
const express = require('express');
const errorHandler = require('../middleware/errorHandler');
const app =express();
const connectDB = require('../confiq/dbConnection');
const cors=require("cors");
const dotenv = require('dotenv').config();
const port = "5000";
app.use(express.json());
connectDB();
app.use(cors())
app.use('/api/contact', require('../routes/contactRoutes'));
app.use('/api/user', require('../routes/userRouter'));
app.route("/test",(res,res)=>{
    res.send("app working");
})
app.use(errorHandler);
app.listen(port, ()=>{
    console.log("Server is running on port", port );
});
exports.app=functions.https.onRequest(app);