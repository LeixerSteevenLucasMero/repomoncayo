import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const dbConnection = async () => {
    try {
        await connect(process.env["MONGODB_CNN"] || "")
        console.log(`Conexión realizada a la base de datos`);
    } catch(error) {
        throw new Error(`Problemas al conectarse a la base de datos`);
        console.log(error);
    }
}

export { dbConnection }