"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ranch = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const ranch_1 = require("../controllers/ranch");
const middlewares_1 = require("../middlewares");
const validation_1 = require("../middlewares/validation");
exports.ranch = (0, express_1.Router)();
exports.ranch.post('/', [
    middlewares_1.validateAPIKey,
    (0, express_validator_1.check)('city', 'The city is required').notEmpty(),
    (0, express_validator_1.check)('street', 'The street is required').notEmpty(),
    (0, express_validator_1.check)('phoneNumber', 'Please input a valid phonen number').notEmpty().isLength({ min: 10 }),
    (0, express_validator_1.check)('postalCode', 'please input a valid Postal Code').notEmpty().isLength({ min: 5 }),
    validation_1.validation
], ranch_1.addRanch);
exports.ranch.get('/', [
    middlewares_1.validateAPIKey,
    validation_1.validation
], ranch_1.getRanchs);
//# sourceMappingURL=ranch.js.map