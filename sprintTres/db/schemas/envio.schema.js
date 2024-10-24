import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;

const envioSchema = new Schema({
    idEmpresaEnvio: { type: Schema.Types.ObjectId, ref: 'EmpresaEnvio', required: true },
    idDireccion: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    fechaEnvio: { type: Date, default: Date.now }
});
  
const Envio = models.envio || model('envio', envioSchema)

export default Envio
