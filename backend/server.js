import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
connectDB(); // Connect to MongoDB
import productRoutes from './routes/productRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'; 
const PORT = process.env.PORT || 5001;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, console.log(`Server running on port ${PORT}`));