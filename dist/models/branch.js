"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const Branch = config_1.default.define('Branch', {
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
    outsideNumber: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    postalCode: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    branchName: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    country: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    idOwner: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    state: {
        type: sequelize_1.default.BOOLEAN,
        allowNull: true
    }
});
exports.default = Branch;
//# sourceMappingURL=branch.js.map