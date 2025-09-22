import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/doctorin`);
console.log("Database Connected")
    }
      
catch (err) {
    console.error(' Could not connect to MongoDB:', err.message);
    process.exit(1); // exit if connection fails
  }



}


export default connectDB