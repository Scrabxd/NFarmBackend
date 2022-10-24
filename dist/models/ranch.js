"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const Ranch = config_1.default.define('Ranch', {
    id: {
        type: sequelize_1.default.NUMBER,
        primaryKey: true,
        allowNull: false
    },
    city: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    street: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    postalCode: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    country: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    cowHeads: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    idFarmer: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    ranchName: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.default.BOOLEAN,
        allowNull: true
    }
});
exports.default = Ranch;
//# sourceMappingURL=ranch.js.map