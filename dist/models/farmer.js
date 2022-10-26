"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const ranch_1 = __importDefault(require("./ranch"));
const Farmer = config_1.default.define('Farmer', {
    id: {
        type: sequelize_1.default.NUMBER,
        primaryKey: true
    },
    rfc: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    countryExportation: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    credentialExportation: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
Farmer.hasMany(ranch_1.default, {
    foreignKey: 'id'
});
ranch_1.default.belongsTo(Farmer, {
    foreignKey: 'idFarmer'
});
exports.default = Farmer;
//# sourceMappingURL=farmer.js.map