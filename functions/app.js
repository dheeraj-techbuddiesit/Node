const express = require('express');
const serverless = require("serverless-http");
const errorHandler = require('./middleware/errorHandler');
const app =express();
const connectDB = require('./confiq/dbConnection');
const dotenv = require('dotenv').config();
const port = "5000";
app.use(express.json());
connectDB();
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/user', require('./routes/userRouter'));
app.use(errorHandler);
app.listen(port, ()=>{
    console.log("Server is running on port", port );
});
module.exports.handler = serverless(app);