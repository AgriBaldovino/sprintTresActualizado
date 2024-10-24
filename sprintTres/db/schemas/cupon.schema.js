import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;

const cuponSchema = new Schema({
    nombreCupon: { type: String, required: true },
    porcentaje: { type: Number, required: true },
    fechaInicio: { type: Number, required: false },
    fechaFin: { type: Number, required: false }
});

const Cupon = models.cupon || model('cupon', cuponSchema)

export default Cupon