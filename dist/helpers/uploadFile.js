"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const uploadFile = (files, extensionsValid = ['png', 'jpeg', 'jpg', 'gif'], folder = '') => {
    return new Promise((resolve, reject) => {
        const { file } = files;
        const cutName = file.name.split('.');
        const extension = cutName[cutName.length - 1];
        if (!extensionsValid.includes(extension)) {
            return reject(`The extension ${extension} is not a valid one, Only ${extensionsValid}`);
        }
        const fileNameTemp = `${(0, uuid_1.v4)()} . ${extension}`;
        const uploadPath = path_1.default.join(__dirname, '../uploads/', folder, fileNameTemp);
        file.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(fileNameTemp);
        });
    });
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=uploadFile.js.map