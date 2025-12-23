import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i90dubc.mongodb.net/?appName=Cluster0/`
    );
    console.log(`DB Connected: ${conn.connection.host}`);
    console.log(`DB Name: ${conn.connection.name}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
