import { connectToDatabase } from "../connection.js";
import Categoria from "../schemas/categoria.schema.js";

export const createCategoria = async({ nombre, descripcionCategoria }) => {
    try {
        await connectToDatabase();
        const res = await Categoria.create({ nombre, descripcionCategoria });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getCategoriaById = async (idCategoria) => {
    try {
        await connectToDatabase();
        const res = await Categoria.findById(idCategoria);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateCategoria = async (idCategoria, updateData) => {
    try {
        await connectToDatabase();
        const res = await Categoria.findByIdAndUpdate(idCategoria, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteCategoria = async (idCategoria) => {
    try {
        await connectToDatabase();
        const res = await Categoria.findByIdAndDelete(idCategoria);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllCategorias = async () => {
    try {
        await connectToDatabase();
        const res = await Categoria.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
