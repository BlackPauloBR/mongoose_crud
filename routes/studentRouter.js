import express from 'express';
import { studentModel } from '../models/student.js';

const app = express.Router();

app.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndDelete({ _id: req.params.id });

    if (!student) {
      res.status(404).send('Documento não encontrado na coleção');
    }
    res.status(200).send({ result: 'Documento deletado' });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true } //quero que o retorno devolva o novo objeto, por padrão devolve o antigo;
    );
    res.send(student);
  } catch (err) {}
});

export { app as studentRouter };
