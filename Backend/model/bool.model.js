import mongoose from "mongoose";

const boolSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    Description:String,
});

const Book = mongoose.model("Book", boolSchema);
export default Book;
