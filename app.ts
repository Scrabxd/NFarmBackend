import dotenv from 'dotenv';
import qrGenerator from './helpers/qrCodeGen';
import Server from './models/server';

// Configurar dotenv
dotenv.config();

qrGenerator();

const server = new Server();



server.listen();