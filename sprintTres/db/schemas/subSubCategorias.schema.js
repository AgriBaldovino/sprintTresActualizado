import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const subsubcategoriaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcionSubsubcategoria: { type: String, required: false },
    subcategoriaId: { type: Schema.Types.ObjectId, ref: 'subCategoria', required: true }, 
});

const Subsubcategoria = models.subsubcategoria || model('subsubcategoria', subsubcategoriaSchema);

export default Subsubcategoria;
