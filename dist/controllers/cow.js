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
exports.deleteCow = exports.updateCow = exports.getCows = exports.addCow = void 0;
const helpers_1 = require("../helpers");
const cows_1 = __importDefault(require("../models/cows"));
const addCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    try {
        const { idGenerated } = (0, helpers_1.idGen)();
        const { certificates, name, breed, weight, } = req.body;
        const cowData = {
            id: idGenerated,
            certificates,
            name,
            breed,
            weight,
            idRanch: id
        };
        const createCow = cows_1.default.build(cowData);
        yield createCow.save();
        return res.json({
            createCow
        });
    }
    catch (error) {
    }
});
exports.addCow = addCow;
const getCows = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    try {
        const findCows = yield cows_1.default.findAll({
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
});
exports.getCows = getCows;
const updateCow = (req, res) => {
    const { id } = (0, helpers_1.getIdUser)(req);
};
exports.updateCow = updateCow;
const deleteCow = (req, res) => {
    const { id } = (0, helpers_1.getIdUser)(req);
};
exports.deleteCow = deleteCow;
//# sourceMappingURL=cow.js.map