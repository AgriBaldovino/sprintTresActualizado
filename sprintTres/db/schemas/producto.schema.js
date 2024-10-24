import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const productoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    talle: { type: String },
    color: { type: String },
    stock: { type: Number, required: true },
    precioUnPago: { type: Number, required: true },
    precio: { type: Number, required: true },
    subsubcategoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subsubcategoria',  required: true },
    imagenes: [{ type: Buffer }] //array para guardar multiples imágenes
});

const Producto = models.producto || model('producto', productoSchema);

export default Producto;
