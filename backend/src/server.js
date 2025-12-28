import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './configs/database.config.js';
import userRoutes from './routes/user.route.js';
import educationRoutes from './routes/education.route.js';
import blogRoutes from './routes/blog.route.js';
import serviceRoutes from './routes/service.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
  res.send('SERVER is running...');
});

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/education', educationRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/comments', commentRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
