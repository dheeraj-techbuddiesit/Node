const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,  useUnifiedTopology:true, }).then((res)=>{
            console.log('data base connected ',res);
        },error=>{
            console.log('database connection error',error);
        }); 
        // console.log("MongoDB connected :", conn.connection.host, conn.connection.name);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = connectDB;