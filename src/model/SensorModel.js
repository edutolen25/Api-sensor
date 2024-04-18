import { Schema,model } from "mongoose";

const sensorSchema = new Schema({
    // Descripción del producto
    description: String,
    // sensor temperatura
    temperature: Number,
    // sensor humedad
    humidity: Number,
    // sensor proximidad
    proximity: Number,
},{
    // Desactivamos la clave de versión de mongoose
    versionKey: false,
    // Habilitamos las marcas de tiempo (createdAt y updatedAt)
    timestamps: true,  
    // habilitar fecha de creacion
    createdAt: true,
});

export default model('Sensor', sensorSchema);