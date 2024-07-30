import mongoose from 'mongoose'

export const connect = async() => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL!)
    console.log('MongoDB Connected...')
  } catch (error) {
    console.log('Error connecting to MongoDB');
    console.log(error);
  }
}
