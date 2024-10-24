import { connectToDatabase } from "../connection.js";
import Subcategoria from "../schemas/subCategorias.schema.js";


export const createSubcategoria = async ({ nombre, descripcionSubcategoria, categoriaId }) => {
    try {
        await connectToDatabase();
        const res = await Subcategoria.create({ nombre, descripcionSubcategoria, categoriaId });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getSubcategoriaById = async (idSubcategoria) => {
    try {
        await connectToDatabase();
        const res = await Subcategoria.findById(idSubcategoria);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateSubcategoria = async (idSubcategoria, updateData) => {
    try {
        await connectToDatabase();
        const res = await Subcategoria.findByIdAndUpdate(idSubcategoria, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteSubcategoria = async (idSubcategoria) => {
    try {
        await connectToDatabase();
        const res = await Subcategoria.findByIdAndDelete(idSubcategoria);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllSubcategorias = async () => {
    try {
        await connectToDatabase();
        const res = await Subcategoria.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getSubcategoriasByCategoriaId = async (categoriaId) => {
    try {
        await connectToDatabase();
        const res = await Subcategoria.find({ categoriaId });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
