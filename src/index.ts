import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import mongoose from 'mongoose';
import cors from 'cors'

app.use(cors())

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  })
  .catch(err => console.error('Error conectando MongoDB', err));
