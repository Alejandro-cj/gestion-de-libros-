import express from 'express';
import connectDB from './config/db';
import bookRoutes from './routes/bookRoutes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});

