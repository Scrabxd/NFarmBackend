"use strict";
'../models';
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
exports.getImage = exports.uploadFiles = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const idGen_1 = require("../helpers/idGen");
const cowImg_1 = __importDefault(require("../models/cowImg"));
cloudinary_1.default.v2.config({
    cloud_name: 'dxchpuxwt',
    api_key: '735768378421165',
    api_secret: 'urb2naSvL4Z1fe4qHMOHka2gHJ0'
});
const uploadFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cowId = req.header('idCow');
    try {
        const { idGenerated } = (0, idGen_1.idGen)();
        const { tempFilePath } = req.files.file;
        const { secure_url } = yield cloudinary_1.default.v2.uploader.upload(tempFilePath);
        const cowImgData = {
            id: idGenerated,
            idCow: cowId,
            images: secure_url
        };
        const createImg = cowImg_1.default.build(cowImgData);
        yield createImg.save();
        return res.json({
            createImg
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.uploadFiles = uploadFiles;
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cowId = req.header('idCow');
    try {
        const cowImg = yield cowImg_1.default.findOne({
            where: {
                idCow: cowId
            }
        });
        return res.status(200).json({
            cowImg
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            msg: 'Talk to an admin - cow'
        });
    }
});
exports.getImage = getImage;
//# sourceMappingURL=upload.js.map