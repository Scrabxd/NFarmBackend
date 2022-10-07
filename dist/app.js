"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const qrCodeGen_1 = __importDefault(require("./helpers/qrCodeGen"));
const server_1 = __importDefault(require("./models/server"));
// Configurar dotenv
dotenv_1.default.config();
(0, qrCodeGen_1.default)();
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map