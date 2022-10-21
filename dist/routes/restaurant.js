"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurant = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.restaurant = (0, express_1.Router)();
exports.restaurant.post('/', [
    middlewares_1.validateAPIKey,
], controllers_1.addRestaurant);
//# sourceMappingURL=restaurant.js.map