"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        // In order to allow the ENV variables to work, we need to add the global.d.ts file and the configuration in the TSCONFIG, the one that is named typeRoots.
        jsonwebtoken_1.default.sign(payload, process.env.SecretKey, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Could not generate the token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=generateJWT.js.map