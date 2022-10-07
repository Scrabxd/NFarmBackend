"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Permision = config_1.default.define('Permision', {
    permision: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Permision;
//# sourceMappingURL=permisions.js.map