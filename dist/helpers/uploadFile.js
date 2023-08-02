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
exports.multiplePhoto = exports.cambiarFoto = exports.imageUpload = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET
});
const imageUpload = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { tempFilePath } = req.files.imageArray;
    try {
        const { secure_url } = yield cloudinary_1.default.v2.uploader.upload(tempFilePath);
        return secure_url;
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
exports.imageUpload = imageUpload;
const cambiarFoto = (fileName, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cloudinary_1.default.v2.uploader.destroy(fileName);
        const { tempFilePath } = req.files.file;
        const { secure_url } = yield cloudinary_1.default.v2.uploader.upload(tempFilePath);
        return secure_url;
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
exports.cambiarFoto = cambiarFoto;
const multiplePhoto = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const files = req.files.imageArray;
    const fileKeys = Object.keys(files);
    try {
        const results = yield Promise.all(fileKeys.map((key) => __awaiter(void 0, void 0, void 0, function* () {
            const file = files[key];
            const result = yield cloudinary_1.default.v2.uploader.upload(file.tempFilePath);
            return result;
        })));
        const urls = results.map(result => result.secure_url);
        return [urls];
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
exports.multiplePhoto = multiplePhoto;
//# sourceMappingURL=uploadFile.js.map