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
exports.getRestaurants = exports.addRestaurant = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const branch_1 = __importDefault(require("../models/branch"));
const addRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, street, phoneNumber, outsideNumber, postalCode, country } = req.body;
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: ' No token in the petition '
        });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
        const { id } = payload;
        let idRes = Math.ceil(Math.random() * 1000000000) + 100;
        const newBranch = {
            id: idRes,
            city,
            street,
            outsideNumber,
            phoneNumber,
            postalCode,
            country,
            idOwner: id
        };
        const createBranch = branch_1.default.build(newBranch);
        createBranch.save();
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
const getRestaurants = (req, res) => {
    const token = req.header('x-token');
    const payload = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
    const { id } = payload;
    try {
        const findRestaurant = branch_1.default.findAll({
            where: {
                idOwner: id
            }
        });
        return res.status(200).json({
            findRestaurant
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            msg: 'Talk to an admin'
        });
    }
};
exports.getRestaurants = getRestaurants;
//# sourceMappingURL=restaurant.js.map