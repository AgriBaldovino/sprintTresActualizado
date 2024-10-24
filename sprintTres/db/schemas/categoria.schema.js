import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;

const categoriaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcionCategoria: { type: String, required: false }
});

const Categoria = models.categoria || model('categoria', categoriaSchema)

export default Categoria