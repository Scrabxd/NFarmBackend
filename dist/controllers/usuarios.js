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
exports.delUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
    res.json({
        usuario
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, last_name } = req.body;
    let id = Math.ceil(Math.random() * 1000000000) + 100;
    const newUser = { id, password, name, email, last_name };
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: email,
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: `Existe usuario con email: ${email}`
            });
        }
        const createUser = usuario_1.default.build(newUser);
        yield createUser.save();
        return res.json({ createUser });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe usuario con id: ${id}`
            });
        }
        yield usuario.update(body);
        res.json({ usuario });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUser = putUser;
const delUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const uid = req.id;
    const user = yield usuario_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `No existe usuario con id: ${id}`
        });
    }
    yield user.update({ state: false });
    const userAuth = req.user;
    // await usuario.destroy(); borrar permanentemente registros.
    res.json({
        user,
        uid,
        userAuth,
    });
});
exports.delUser = delUser;
//# sourceMappingURL=usuarios.js.map