import express, { Router, Express } from "express";
import cors from 'cors';

import { router as cliente } from './routes/cliente';
import { router as local } from './routes/local';
import { router as mascota } from './routes/mascota';
import { router as reservacion } from './routes/reserva';
import { router as servicio } from './routes/servicio';
import { router as veterinario } from './routes/veterinario';

import { dbConnection } from "./database/config";

import dotenv from 'dotenv';
dotenv.config()

class Server {
    app: Router;
    router: Router;
    port:Number;
    paths: { [ key:string ] : string };
    private _express: Express;
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number(process.env["PORT"]);
        this.paths = {
            cliente: '/api/clientes',
            local: '/api/locales',
            mascota: '/api/mascotas',
            reservacion: '/api/reservaciones',
            servicio: '/api/servicios',
            veterinario: '/api/veterinarios'
        }
        this.conectarDB();
        this.middleware();
        this.routes();
        this.router.use('/v2/sexto/', this.app);
        this._express = express().use(this.router);
    }
    private async conectarDB(){
        await dbConnection()
    }
    private middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.cliente, cliente);
        this.app.use(this.paths.local, local);
        this.app.use(this.paths.mascota, mascota);
        this.app.use(this.paths.reservacion, reservacion);
        this.app.use(this.paths.servicio, servicio);
        this.app.use(this.paths.veterinario, veterinario);
    }
    listen(){
        this._express.listen(this.port, () => {
            console.log(`Servidor en el puerto: ${this.port}`);
        })
    }
}

export { Server }
