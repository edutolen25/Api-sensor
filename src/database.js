import mongoose from "mongoose";

mongoose.connect(process.env.DATA_BASE)
    .then(() => 
        console.log("Connected to MongoDB"))
    .catch(err =>
         console.error("Could not connect to MongoDB", err));

export default mongoose;