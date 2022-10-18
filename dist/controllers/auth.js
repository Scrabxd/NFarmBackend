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
exports.login = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateJWT_1 = require("../helpers/generateJWT");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Verify if email exists.
        const user = yield User_1.default.findOne({
            where: {
                email: email,
            }
        });
        if (!user) {
            return res.status(400).json({
                msg: " User / Password are not correct "
            });
        }
        // Verify if user is still active in database
        if (!user.state) {
            return res.status(400).json({
                msg: 'Account deleted'
            });
        }
        // Verify password.
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Password Incorrect"
            });
        }
        // Generate JWT
        const token = yield (0, generateJWT_1.generateJWT)(user.id);
        res.json({
            msg: 'Login OKIDOKI',
            user,
            token
        });
    }
    catch (error) {
        return res.json({
            msg: ' Talk to the admin.'
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map