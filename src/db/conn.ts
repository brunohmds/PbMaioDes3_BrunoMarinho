import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb://localhost:27017/desafio_3';

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('MongoDB Connection Succeeded');
  })
  .catch((err) => {
    console.log(`Error in DB connection: ${err.message}`);
  });

export default mongoose;
