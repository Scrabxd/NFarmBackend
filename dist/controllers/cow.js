"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCows = exports.addCow = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cows_1 = __importDefault(require("../models/cows"));
const addCow = (req, res) => {
    const token = req.headers('x-token');
    const payload = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
    const { id } = payload;
    try {
        const {} = req.body;
        return res.json({
            msg: 'Oki'
        });
    }
    catch (error) {
    }
};
exports.addCow = addCow;
const getCows = (req, res) => {
    const token = req.header('x-token');
    const payload = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
    const { id } = payload;
    try {
        const findCows = cows_1.default.findAll({
            where: {
                idRanch: id
            }
        });
        return res.status(200).json({
            findCows
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            msg: 'Talk to the admin'
        });
    }
};
exports.getCows = getCows;
//# sourceMappingURL=cow.js.map