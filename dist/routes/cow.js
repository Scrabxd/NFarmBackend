"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const cow_1 = require("../controllers/cow");
const controllers_1 = require("../controllers");
const validation_1 = require("../middlewares/validation");
const cow = (0, express_1.Router)();
cow.post('/', [
    // validateAPIKey,
    (0, express_validator_1.check)('breed', 'There must be a breed').notEmpty(),
    (0, express_validator_1.check)('name', 'There must be a name').notEmpty(),
    (0, express_validator_1.check)('weight', 'Input a weight').isNumeric().notEmpty(),
    validation_1.validation
], cow_1.addCow);
cow.get('/', [
    // validateAPIKey,
    validation_1.validation
], controllers_1.getCows);
cow.get('/single', [
    middlewares_1.validateAPIKey,
    validation_1.validation
], cow_1.getSingleCow);
cow.put('/', [
    // validateAPIKey,
    validation_1.validation
], cow_1.updateCow);
cow.delete('/', [
    // validateAPIKey,
    validation_1.validation
], cow_1.deleteCow);
exports.default = cow;
//# sourceMappingURL=cow.js.map