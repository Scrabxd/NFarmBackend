"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const User_1 = __importDefault(require("./User"));
const Farmer = config_1.default.define('Farmer', {
    id: {
        type: sequelize_1.default.NUMBER,
        primaryKey: true
    },
    rfc: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    country_Exportation: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    credential_Exportation: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
Farmer.hasOne(User_1.default, {
    foreignKey: 'id'
});
exports.default = Farmer;
//# sourceMappingURL=farmer.js.map