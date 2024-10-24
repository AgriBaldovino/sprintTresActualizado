import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;

const rolSchema = new Schema({
    nombre: { type: String, required: true },
    internal: { type: Boolean, required: true }
});

const Rol = models.rol || model('rol', rolSchema)

export default Rol