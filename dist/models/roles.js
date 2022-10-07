"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Role = config_1.default.define('Role', {
    slug: {
        type: sequelize_1.DataTypes.TEXT,
    },
    role: {
        type: sequelize_1.DataTypes.CHAR
    }
});
exports.default = Role;
//# sourceMappingURL=roles.js.map