"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const Role = config_1.default.define('Role', {
    id: {
        type: sequelize_1.default.STRING,
        primaryKey: true
    },
    slug: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.default = Role;
//# sourceMappingURL=role.js.map