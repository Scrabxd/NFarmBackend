"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getIdUser = (req) => {
    const token = req.header('x-token');
    const payload = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
    const { id } = payload;
    return {
        id
    };
};
exports.getIdUser = getIdUser;
//# sourceMappingURL=getIdUser.js.map