const mongoose = require('mongoose');   

const contactScema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"]
    },
    mobile : {
        type : String,
        required : [true, "Mobile number is required"]
    },
},{
    timestamps : true
});

module.exports = mongoose.model("Contact", contactScema);
