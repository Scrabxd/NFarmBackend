"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const bcryptjs_1 = __importStar(require("bcryptjs"));
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const Usuario = config_1.default.define('Usuario', {
    id: {
        type: sequelize_1.default.STRING,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    contraseña: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    correo: {
        type: sequelize_1.default.STRING,
        unique: true,
        allowNull: false
    },
    estado: {
        type: sequelize_1.default.BOOLEAN
    },
}, {
    hooks: {
        beforeCreate: (user) => __awaiter(void 0, void 0, void 0, function* () {
            if (user.contraseña) {
                const salt = (0, bcryptjs_1.genSaltSync)();
                user.contraseña = bcryptjs_1.default.hashSync(user.contraseña, salt);
            }
        })
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map