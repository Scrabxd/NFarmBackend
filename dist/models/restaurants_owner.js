"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const Restaurant = config_1.default.define('Restaurant_owner', {
    id: {
        type: sequelize_1.default.STRING,
        primaryKey: true,
        allowNull: false
    },
    rfc: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.default = Restaurant;
//# sourceMappingURL=restaurants_owner.js.map