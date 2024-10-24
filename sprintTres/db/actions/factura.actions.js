import { connectToDatabase } from "../connection.js";
import Factura from "../schemas/factura.schema.js";


export const createFactura = async({ productos, total, metodoPago, estadoPago, idEnvio }) => {
    try {
        await connectToDatabase();
        const res = await Factura.create({ productos, total, metodoPago, estadoPago, idEnvio });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getFacturaById = async (idFactura) => {
    try {
        await connectToDatabase();
        const res = await Factura.findById(idFactura).populate('productos.idProducto').populate('idEnvio');
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateFactura = async (idFactura, updateData) => {
    try {
        await connectToDatabase();
        const res = await Factura.findByIdAndUpdate(idFactura, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteFactura = async (idFactura) => {
    try {
        await connectToDatabase();
        const res = await Factura.findByIdAndDelete(idFactura);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllFacturas = async () => {
    try {
        await connectToDatabase();
        const res = await Factura.find().populate('productos.idProducto').populate('idEnvio');
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
