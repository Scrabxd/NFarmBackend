import express, { Application } from 'express';
import router from '../routes/users';
import cors from 'cors'
import db from '../db/config';
import { auth } from '../routes/auth';
import { restaurant } from '../routes';
import { ranch } from '../routes/ranch';
import cow from '../routes/cow';
import fileUpload from 'express-fileupload'



class Server {
    
    private app : Application ;
    
    private port : string ;

    private apiPath = {
        users: '/api/nfarm',
        auth:'/api/auth',
        restaurant:'/api/restaurant',
        ranch:'/api/ranch',
        cow:'/api/cow',
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
        this.app.use(express.static('public'));

        // File upload 
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir : '/tmp/',
            createParentPath:true
        }))
    }

    routes(){

        this.app.use(this.apiPath.auth, auth);
        this.app.use(this.apiPath.users, router);
        this.app.use(this.apiPath.restaurant, restaurant);
        this.app.use(this.apiPath.ranch, ranch);
        this.app.use(this.apiPath.cow, cow);

    }


    listen() {
        this.app.listen( this.port, ( ) => {
            console.log('Server running in port: ' + this.port)
        })
    }


}

export default Server;