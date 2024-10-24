import mongoose from 'mongoose';

const { Schema, models, model  } = mongoose;

const facturaSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    productos: [{
      idProducto: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true },
      precioUnitario: { type: Number, required: true },
      subtotal: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    metodoPago: { type: String, required: true },
    estadoPago: { type: String, required: true },
    idEnvio: { type: Schema.Types.ObjectId, ref: 'Envio', required: false },
    tipoEntrega: { type: String, enum: ['envio', 'take away'] } 
});
  

facturaSchema.pre('save', function (next) {
    if (!this.idEnvio) {
      this.tipoEntrega = 'take away';
    } else {
      this.tipoEntrega = 'envio'; 
    }
    next();
});

const Factura = models.factura || model('factura', facturaSchema)

export default Factura