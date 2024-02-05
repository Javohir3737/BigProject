const mongoose = require('mongoose');
const { Schema, model} = mongoose;


async function connect() {
    try{
        await mongoose.connect(process.env.MONGO_URL , {});
        console.log("Connected to MongoDB");
    } catch(err) {
        console.error(err);
    }
}

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 4
    },
    login: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    }
});




const Usermodel = model("User", userSchema)

module.exports = { connect, Usermodel }