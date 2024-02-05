const mongoose = require("mongoose");
const { Schema, model } = mongoose;



async function connect() {
    try{
        await mongoose.connect(process.env.MONGO_URL , {});
        console.log("Connected to MongoDB");
    } catch(err) {
        console.error(err);
    }
}

const postSchema = new Schema({
    post: {
        type : String,
        require: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    comment: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    }
});


const postModel = model("Post", postSchema)

module.exports = { connect, postModel }