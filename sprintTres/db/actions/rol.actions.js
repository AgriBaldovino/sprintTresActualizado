import { connectToDatabase } from "../connection.js";
import Rol from "../schemas/rol.schema.js";


export const createRol = async ({ nombre, internal }) => {
    try {
        await connectToDatabase();
        const res = await Rol.create({ nombre, internal });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getRolById = async (idRol) => {
    try {
        await connectToDatabase();
        const res = await Rol.findById(idRol);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateRol = async (idRol, updateData) => {
    try {
        await connectToDatabase();
        const res = await Rol.findByIdAndUpdate(idRol, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteRol = async (idRol) => {
    try {
        await connectToDatabase();
        const res = await Rol.findByIdAndDelete(idRol);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllRoles = async () => {
    try {
        await connectToDatabase();
        const res = await Rol.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
