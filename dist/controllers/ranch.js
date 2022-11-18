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
const addRanch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, street, phoneNumber, postalCode, country, cowHeads, ranchName, } = req.body;
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: ' No token in the petition '
        });
    }
    try {
        const { id } = (0, helpers_1.getIdUser)(req);
        const { idGenerated } = (0, helpers_1.idGen)();
        const existRanch = yield ranch_1.default.findOne({
            where: {
                street: street,
                country: country,
                idFarmer: id,
                state: true
            }
        });
        if (existRanch) {
            return res.status(400).json({
                msg: 'This Ranch Already exists'
            });
        }
        const newRanch = {
            id: idGenerated,
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
        yield createRanch.save();
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
});
exports.addRanch = addRanch;
const getRanch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    try {
        const ranch = yield ranch_1.default.findAll({
            where: {
                idFarmer: id,
                state: true
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
const updateRanch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    const name = req.header('ranchName');
    const { body } = req;
    try {
        const ranch = yield ranch_1.default.findOne({
            where: {
                idFarmer: id,
                id: name
            }
        });
        ranch === null || ranch === void 0 ? void 0 : ranch.update(body);
        return res.status(200).json({
            ranch
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to the admin'
        });
    }
});
exports.updateRanch = updateRanch;
const deleteRanch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    const name = req.header('ranchName');
    try {
        const ranch = yield ranch_1.default.findOne({
            where: {
                idFarmer: id,
                id: name
            }
        });
        ranch === null || ranch === void 0 ? void 0 : ranch.update({ state: false });
        return res.status(200).json({
            ranch
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to the admin '
        });
    }
});
exports.deleteRanch = deleteRanch;
//# sourceMappingURL=ranch.js.map