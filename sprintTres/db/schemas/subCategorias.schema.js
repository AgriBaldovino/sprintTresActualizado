import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const subcategoriaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcionSubcategoria: { type: String, required: false },
    categoriaId: { type: Schema.Types.ObjectId, ref: 'categoria', required: true }, 
});

const Subcategoria = models.subcategoria || model('subcategoria', subcategoriaSchema);

export default Subcategoria;
