import mongoose from 'mongoose';

export default async function dbConnect() {
  if (mongoose.connect(process.env.MONGODB_URI)) {
    console.log('connected');
  } else {
    console.log('Unable to connect');
  }
}
