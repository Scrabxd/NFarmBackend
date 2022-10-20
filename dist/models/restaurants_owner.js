"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const branch_1 = __importDefault(require("./branch"));
const Restaurant_owner = config_1.default.define('Restaurant_owner', {
    id: {
        type: sequelize_1.default.STRING,
        primaryKey: true,
        allowNull: false
    },
    rfc: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    restaurantName: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
Restaurant_owner.hasMany(branch_1.default, {
    foreignKey: 'id'
});
//One to one with restaurant
branch_1.default.belongsTo(Restaurant_owner, {
    foreignKey: 'idOwner'
});
exports.default = Restaurant_owner;
//# sourceMappingURL=restaurants_owner.js.map