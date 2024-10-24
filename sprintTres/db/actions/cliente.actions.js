import { connectToDatabase } from "../connection.js"
import Cliente from "../schemas/cliente.schema.js"

export const createCliente = async ({ idUsuario, direcciones }) => {
    try {
        await connectToDatabase();
        const res = await Cliente.create({ idUsuario, direcciones });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};

export const getClienteById = async (idCliente) => {
    try {
        await connectToDatabase();
        const res = await Cliente.findById(idCliente).populate('idUsuario');
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};

export const updateCliente = async (idCliente, updateData) => {
    try {
        await connectToDatabase();
        const res = await Cliente.findByIdAndUpdate(idCliente, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};

export const deleteCliente = async (idCliente) => {
    try {
        await connectToDatabase();
        const res = await Cliente.findByIdAndDelete(idCliente);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};

export const getAllClientes = async () => {
    try {
        await connectToDatabase();
        const res = await Cliente.find().populate('idUsuario');
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};