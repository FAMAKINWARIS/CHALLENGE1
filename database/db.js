const mongoose =require('mongoose');
mongoose.set('strictQuery', false) 

const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('connected to Database');
  } catch (error) {
    console.log(error.message)
  }
};

module.exports= connectDB;  