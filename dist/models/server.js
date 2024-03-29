"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../routes/users"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../db/config"));
const auth_1 = require("../routes/auth");
const routes_1 = require("../routes");
const ranch_1 = require("../routes/ranch");
const cow_1 = __importDefault(require("../routes/cow"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
class Server {
    constructor() {
        this.apiPath = {
            users: '/api/nfarm',
            auth: '/api/auth',
            restaurant: '/api/restaurant',
            ranch: '/api/ranch',
            cow: '/api/cow',
        };
        // Metodos iniciales
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.dbConn();
        // Middlewares
        this.middlewares();
        // Definir las rutas.
        this.routes();
    }
    dbConn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.default.authenticate();
                console.log('Database Online');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        // cors
        this.app.use((0, cors_1.default)());
        // lectura del body
        this.app.use(express_1.default.json());
        // carpeta publica, donde iria la app
        this.app.use(express_1.default.static('public'));
        // File upload 
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }
    routes() {
        this.app.use(this.apiPath.auth, auth_1.auth);
        this.app.use(this.apiPath.users, users_1.default);
        this.app.use(this.apiPath.restaurant, routes_1.restaurant);
        this.app.use(this.apiPath.ranch, ranch_1.ranch);
        this.app.use(this.apiPath.cow, cow_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map