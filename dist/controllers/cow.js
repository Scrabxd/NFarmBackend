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
exports.deleteCow = exports.updateCow = exports.getSingleCow = exports.getCows = exports.addCow = void 0;
const helpers_1 = require("../helpers");
const uploadFile_1 = require("../helpers/uploadFile");
const cows_1 = __importDefault(require("../models/cows"));
const addCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idRanch = req.header('idRanch');
    const { idGenerated } = (0, helpers_1.idGen)();
    const cowImages = req.files.imageArray;
    let images = null;
    const { certificates, name, breed, weight, } = req.body;
    try {
        const existCow = yield cows_1.default.findOne({
            where: {
                name: name,
                idRanch: idRanch,
                state: true
            }
        });
        if (existCow) {
            return res.status(400).json({
                msg: 'Cow Exits in this ranch'
            });
        }
        if (Array.isArray(cowImages)) {
            const real = yield (0, uploadFile_1.multiplePhoto)(req);
            images = real.join(',');
        }
        else {
            images = yield (0, uploadFile_1.imageUpload)(req);
        }
        const cowData = {
            id: idGenerated,
            certificates,
            name,
            breed,
            weight,
            idRanch: idRanch,
            images
        };
        const createCow = cows_1.default.build(cowData);
        yield createCow.save();
        return res.json({
            createCow
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.addCow = addCow;
const getCows = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idRanch = req.header('idRanch');
    try {
        const findCows = yield cows_1.default.findAll({
            where: {
                idRanch: idRanch,
                state: true
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
const getSingleCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cowIdReal = req.header('realIdCow');
    try {
        const findCow = yield cows_1.default.findOne({
            where: {
                id: cowIdReal,
            }
        });
        return res.json({
            findCow
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            msg: 'Talk to the admin'
        });
    }
});
exports.getSingleCow = getSingleCow;
const updateCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ranchId = req.header('ranchId');
    const name = req.header('cowId');
    const { body } = req;
    try {
        const cow = yield cows_1.default.findOne({
            where: {
                idRanch: ranchId,
                id: name
            }
        });
        cow === null || cow === void 0 ? void 0 : cow.update(body);
        res.status(200).json({
            cow
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to the admin'
        });
    }
});
exports.updateCow = updateCow;
const deleteCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ranchId = req.header('ranchId');
    const name = req.header('cowId');
    try {
        const cow = yield cows_1.default.findOne({
            where: {
                idRanch: ranchId,
                id: name
            }
        });
        cow === null || cow === void 0 ? void 0 : cow.update({ state: false });
        return res.status(200).json({
            cow
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to the admin'
        });
    }
});
exports.deleteCow = deleteCow;
//# sourceMappingURL=cow.js.map