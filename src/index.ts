import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usuariosRoute from './routes/usuarios.routes';

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://Cluster50679:21341272@cluster50679.cxfp78j.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});
app.use(cors());
app.use(express.json());
app.use ('/api', usuariosRoute);


app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});





