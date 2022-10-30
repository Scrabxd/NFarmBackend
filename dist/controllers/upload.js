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
exports.getManager = exports.uploadManager = void 0;
const s3Config_1 = require("../db/s3Config");
const helpers_1 = require("../helpers");
const cowImg_1 = __importDefault(require("../models/cowImg"));
const uploadManager = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = (0, s3Config_1.generateURl)();
    const cowName = req.header('cowName');
    try {
        const { idGenerated } = (0, helpers_1.idGen)();
        const img = {
            id: idGenerated,
            idCow: cowName,
            lg: url
        };
        const createCowImg = cowImg_1.default.build(img);
        yield createCowImg.save();
        return res.status(200).json({
            createCowImg
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.uploadManager = uploadManager;
const getManager = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cowName = req.header('cowName');
    try {
        const findCowImgaes = yield cowImg_1.default.findAll({
            where: {
                idCow: cowName
            }
        });
        return res.status(200).json({
            findCowImgaes
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.getManager = getManager;
//# sourceMappingURL=upload.js.map