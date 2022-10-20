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
const farmer_1 = __importDefault(require("../models/farmer"));
const restaurants_owner_1 = __importDefault(require("../models/restaurants_owner"));
const User_1 = __importDefault(require("../models/User"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //TODO: Apikey
    const user = yield farmer_1.default.findAll();
    res.json({ user });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `No User with the id: ${id}`
        });
    }
    res.json({
        user
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, rfc, countryExportation, credentialExportation, email, password, idRole, restaurantName } = req.body;
    // 1 = Farmer
    // 2 = Restaurant Owner
    try {
        let id = Math.ceil(Math.random() * 1000000000) + 100;
        const userData = { id, name, lastName, email, password, idRole };
        const emailExists = yield User_1.default.findOne({
            where: {
                email: email,
            }
        });
        if (emailExists) {
            return res.status(400).json({
                msg: `Existing User with email: ${email}`
            });
        }
        const createUser = User_1.default.build(userData);
        yield createUser.save();
        if (idRole === 1) {
            const farmerData = { id, rfc, countryExportation, credentialExportation };
            const createFarmer = farmer_1.default.build(farmerData);
            yield createFarmer.save();
            return res.json({ createUser, createFarmer });
        }
        else {
            const Restaurant_ownersData = { id, rfc, restaurantName };
            const createRestaurant_owner = restaurants_owner_1.default.build(Restaurant_ownersData);
            yield createRestaurant_owner.save();
            return res.json({ createUser, createRestaurant_owner });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to  an admin'
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `No existe usuario con id: ${id}`
            });
        }
        yield user.update(body);
        res.json({ user });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.putUser = putUser;
const delUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const uid = req.id;
    const user = yield User_1.default.findByPk(id);
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
//# sourceMappingURL=users.js.map