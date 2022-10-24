"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRanchs = exports.addRanch = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ranch_1 = __importDefault(require("../models/ranch"));
const addRanch = (req, res) => {
    const { city, street, phoneNumber, postalCode, country, cowHeads, ranchName, } = req.body;
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: ' No token in the petition '
        });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
        const { id } = payload;
        let idR = Math.ceil(Math.random() * 1000000000) + 100;
        const newRanch = {
            id: idR,
            city,
            street,
            phoneNumber,
            postalCode,
            country,
            cowHeads,
            ranchName,
            idFarmer: id
        };
        const createRanch = ranch_1.default.build(newRanch);
        createRanch.save();
        return res.status(201).json({
            createRanch
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to an admin',
        });
    }
};
exports.addRanch = addRanch;
const getRanchs = (req, res) => {
    const token = req.header('x-token');
    const payload = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
    const { id } = payload;
    try {
        const findRanch = ranch_1.default.findAll({
            where: {
                idFarmer: id
            }
        });
        return res.status(200).json({
            findRanch
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            msg: 'Talk to the admin'
        });
    }
};
exports.getRanchs = getRanchs;
//# sourceMappingURL=ranch.js.map