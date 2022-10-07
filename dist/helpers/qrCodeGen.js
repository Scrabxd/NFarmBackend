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
const fs_1 = __importDefault(require("fs"));
const qrcode_1 = __importDefault(require("qrcode"));
const qrGenerator = (url = 'localhost:4000') => __awaiter(void 0, void 0, void 0, function* () {
    const qr = yield qrcode_1.default.toDataURL(url);
    const htmlContent = `
    <div style="display:flex; justify-content:center; align-items:center;">
    <h2> QR GENERADO </h2> 
    <img src="${qr}">
    </div>
    
    `;
    fs_1.default.writeFile('./public/index.html', `${htmlContent}`, () => { });
});
exports.default = qrGenerator;
//# sourceMappingURL=qrCodeGen.js.map