import { connectToDatabase } from "../connection.js";
import Producto from "../schemas/producto.schema.js";


export const createProducto = async ({ nombre, descripcion, talle, color, stock, precioUnPago, precio, subsubcategoriaId, imagen }) => {
    try {
        await connectToDatabase();
        const res = await Producto.create({ nombre, descripcion, talle, color, stock, precioUnPago, precio, subsubcategoriaId, imagen });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getProductoById = async (idProducto) => {
    try {
        await connectToDatabase();
        const res = await Producto.findById(idProducto);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getProductosBySubsubcategoriaId = async (subsubcategoriaId) => {
    return await Producto.find({ subsubcategoriaId });
};


export const updateProducto = async (idProducto, updateData) => {
    try {
        await connectToDatabase();
        const res = await Producto.findByIdAndUpdate(idProducto, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteProducto = async (idProducto) => {
    try {
        await connectToDatabase();
        const res = await Producto.findByIdAndDelete(idProducto);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllProductos = async () => {
    try {
        await connectToDatabase();
        const res = await Producto.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
