import { connectToDatabase } from "../connection.js";
import Usuario from "../schemas/usuario.schema.js";


export const createUsuario = async ({ nombre, apellido, email, telefono, dni, contrasenia, idRol }) => {
    try {
        await connectToDatabase();
        const res = await Usuario.create({ nombre, apellido, email, telefono, dni, contrasenia, idRol });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getUsuarioById = async (idUsuario) => {
    try {
        await connectToDatabase();
        const res = await Usuario.findById(idUsuario).populate('idRol');
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateUsuario = async (idUsuario, updateData) => {
    try {
        await connectToDatabase();
        const res = await Usuario.findByIdAndUpdate(idUsuario, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteUsuario = async (idUsuario) => {
    try {
        await connectToDatabase();
        const res = await Usuario.findByIdAndDelete(idUsuario);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllUsuarios = async () => {
    try {
        await connectToDatabase();
        const res = await Usuario.find().populate('idRol'); 
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
