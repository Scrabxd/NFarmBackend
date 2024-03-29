"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurant = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.restaurant = (0, express_1.Router)();
exports.restaurant.post('/', [
    // validateAPIKey, 
    (0, express_validator_1.check)('city', 'The city is required').notEmpty(),
    (0, express_validator_1.check)('street', 'The street is required').notEmpty(),
    (0, express_validator_1.check)('outsideNumber', 'The Outside number is required.').notEmpty(),
    (0, express_validator_1.check)('phoneNumber', 'Please input a valid phonen number').notEmpty().isLength({ min: 10 }),
    (0, express_validator_1.check)('postalCode', 'please input a valid Postal Code').notEmpty().isLength({ min: 5 }),
    middlewares_1.validation,
], controllers_1.addRestaurant);
exports.restaurant.get('/', [
    // validateAPIKey,
    middlewares_1.validation
], controllers_1.getRestaurants);
exports.restaurant.put('/', [
    // validateAPIKey,
    middlewares_1.validation
], controllers_1.updateRestaurant);
exports.restaurant.delete('/', [
    // validateAPIKey,
    middlewares_1.validation
], controllers_1.deleteRestaurant);
//# sourceMappingURL=restaurant.js.map