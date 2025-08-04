const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connect");
    }catch(e){
        console.log(e.message);
        process.exit(1);
    }
}

module.exports = connectDB();
