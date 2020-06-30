import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0)
        throw new Error('Valor negativo para a nota não permitido.');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

//necessario repetir a paramentro 'student', pois estamos forçando a ficar no singular,
//pois o mongoose, por padrão já coloca em plural os nomes das COLLECTIONS;
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
