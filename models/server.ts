import express, { Application } from 'express';
import router from '../routes/usuario';
import cors from 'cors'
import db from '../db/config';
import { auth } from '../routes/auth';


class Server {
    
    private app : Application ;
    private port : string ;
    private apiPath = {
        usuarios: '/api/nfarm',
        auth:'/api/auth'
    }


    constructor() {
        
        // Metodos iniciales
        this.app = express();
        this.port = process.env.PORT || '4000' ;
        
        this.dbConn();

        // Middlewares

        this.middlewares();

        // Definir las rutas.
        this.routes()

    }

    // TODO:  Conectar con base de datos.


    async dbConn () {
        try {
            
            await db.authenticate();
            console.log('Database Online')

        } catch (error) {
            console.log(error)
        }
    }
     
    middlewares() {
        // cors

        this.app.use( cors() );

        // lectura del body

        this.app.use( express.json() );

        // carpeta publica, donde iria la app
        this.app.use(express.static('public'))
    }

    routes(){

        this.app.use(this.apiPath.auth, auth)
        this.app.use(this.apiPath.usuarios, router)
        

    }


    listen() {
        this.app.listen( this.port, ( ) => {
            console.log('Server running in port: ' + this.port)
        })
    }


}

export default Server;