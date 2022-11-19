"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const cowImage = config_1.default.define('cowImage', {
    id: {
        type: sequelize_1.default.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    idCow: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    images: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.default = cowImage;
//# sourceMappingURL=cowImg.js.map