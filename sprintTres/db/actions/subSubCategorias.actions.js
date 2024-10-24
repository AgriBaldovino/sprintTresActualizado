import { connectToDatabase } from "../connection.js";
import Subsubcategoria from "../schemas/subSubCategorias.schema.js";


export const createSubsubcategoria = async ({ nombre, descripcionSubsubcategoria, subcategoriaId }) => {
    try {
        await connectToDatabase();
        const res = await Subsubcategoria.create({ nombre, descripcionSubsubcategoria, subcategoriaId });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getSubsubcategoriaById = async (idSubsubcategoria) => {
    try {
        await connectToDatabase();
        const res = await Subsubcategoria.findById(idSubsubcategoria);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateSubsubcategoria = async (idSubsubcategoria, updateData) => {
    try {
        await connectToDatabase();
        const res = await Subsubcategoria.findByIdAndUpdate(idSubsubcategoria, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteSubsubcategoria = async (idSubsubcategoria) => {
    try {
        await connectToDatabase();
        const res = await Subsubcategoria.findByIdAndDelete(idSubsubcategoria);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllSubsubcategorias = async () => {
    try {
        await connectToDatabase();
        const res = await Subsubcategoria.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getSubsubcategoriasBySubcategoriaId = async (subcategoriaId) => {
    try {
        await connectToDatabase();
        const res = await Subsubcategoria.find({ subcategoriaId });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
