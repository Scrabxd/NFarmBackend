"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRanch = exports.updateRanch = exports.getRanch = exports.addRanch = void 0;
const helpers_1 = require("../helpers");
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
        const { id } = (0, helpers_1.getIdUser)(req);
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
const getRanch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    try {
        const ranch = yield ranch_1.default.findAll({
            where: {
                idFarmer: id
            }
        });
        return res.status(200).json({ ranch });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            msg: 'Talk to the admin'
        });
    }
});
exports.getRanch = getRanch;
const updateRanch = (req, res) => {
    const { id } = (0, helpers_1.getIdUser)(req);
};
exports.updateRanch = updateRanch;
const deleteRanch = (req, res) => {
    const { id } = (0, helpers_1.getIdUser)(req);
};
exports.deleteRanch = deleteRanch;
//# sourceMappingURL=ranch.js.map