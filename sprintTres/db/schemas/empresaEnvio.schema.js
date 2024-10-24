import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;


const empresaEnvioSchema = new Schema({
    empresa: { type: String, required: true },
    telefono: { type: String },
    direccion: { type: String },
    urlSeguimiento: { type: String, required: true }
});
  

const EmpresaEnvio = models.empresaEnvio || model('empresaEnvio', empresaEnvioSchema)

export default EmpresaEnvio
