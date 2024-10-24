import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;

const clienteSchema = new Schema({
    idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    direcciones: [{
      codigoPostal: { type: String, required: true },
      calle: { type: String, required: true },
      numero: { type: Number, required: true },
      torre: { type: Number, required: false },
      piso: { type: Number, required: false }
    }]
});
  
const Cliente = models.cliente || model('cliente', clienteSchema)

export default Cliente