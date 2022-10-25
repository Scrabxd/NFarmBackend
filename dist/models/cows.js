"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../db/config"));
const Cow = config_1.default.define('Cow', {
    id: {
        type: sequelize_1.default.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    certificates: {
        type: sequelize_1.default.TEXT,
        allowNull: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    breed: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    weight: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    idRanch: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    }
});
exports.default = Cow;
//# sourceMappingURL=cows.js.map