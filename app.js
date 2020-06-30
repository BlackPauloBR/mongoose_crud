import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://black:<password>@cluster0-0qkbz.gcp.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log('BD acessado');
  } catch (error) {
    console.log(error);
  }
})();

const app = express();
const port = 3000;
app.use(express.json());
app.use(studentRouter);
app.listen(port, () => console.log('API Started'));
