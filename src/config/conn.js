import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected");
  } catch (error) {
    console.error('Error in DB Connection: ' + error);
    process.exit(1);
  }
};
 
connectDB();

export default connectDB;