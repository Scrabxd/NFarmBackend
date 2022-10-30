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
exports.deleteRestaurant = exports.updateRestaurant = exports.getRestaurants = exports.addRestaurant = void 0;
const helpers_1 = require("../helpers");
const branch_1 = __importDefault(require("../models/branch"));
const addRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, street, phoneNumber, outsideNumber, postalCode, country, branchName } = req.body;
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: ' No token in the petition '
        });
    }
    try {
        const { id } = (0, helpers_1.getIdUser)(req);
        const { idGenerated } = (0, helpers_1.idGen)();
        const newBranch = {
            id: idGenerated,
            city,
            street,
            outsideNumber,
            phoneNumber,
            postalCode,
            country,
            idOwner: id,
            branchName,
        };
        const createBranch = branch_1.default.build(newBranch);
        yield createBranch.save();
        return res.status(201).json({
            createBranch
        });
    }
    catch (error) {
        return res.status(400).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.addRestaurant = addRestaurant;
const getRestaurants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    try {
        const findRestaurant = yield branch_1.default.findAll({
            where: {
                idOwner: id,
                state: true
            }
        });
        return res.status(200).json({
            findRestaurant,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.getRestaurants = getRestaurants;
const updateRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    const name = req.header('branchName');
    const { body } = req;
    try {
        const branch = yield branch_1.default.findOne({
            where: {
                idOwner: id,
                branchName: name
            }
        });
        branch === null || branch === void 0 ? void 0 : branch.update(body);
        return res.status(200).json({
            branch
        });
        // await branch?.update( body )
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to an admin'
        });
    }
});
exports.updateRestaurant = updateRestaurant;
const deleteRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = (0, helpers_1.getIdUser)(req);
    const name = req.header('branchName');
    try {
        const branch = yield branch_1.default.findOne({
            where: {
                idOwner: id,
                branchName: name
            }
        });
        yield (branch === null || branch === void 0 ? void 0 : branch.update({ state: false }));
        return res.status(200).json({
            branch
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Talk to the admin'
        });
    }
});
exports.deleteRestaurant = deleteRestaurant;
//# sourceMappingURL=restaurant.js.map