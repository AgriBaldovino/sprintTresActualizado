import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String },
    dni: { type: String, required: true },
    contrasenia: { type: String, required: true },
    idRol: { type: Schema.Types.ObjectId, ref: 'Rol' }
});

const Usuario = models.usuario || model('usuario', usuarioSchema)

export default Usuario