"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cow_1 = require("../controllers/cow");
const middlewares_1 = require("../middlewares");
const validation_1 = require("../middlewares/validation");
const cow = (0, express_1.Router)();
cow.post('/', [
    middlewares_1.validateAPIKey,
    validation_1.validation
], cow_1.addCow);
cow.get('/', [
    middlewares_1.validateAPIKey,
    validation_1.validation
], cow_1.getCows);
exports.default = cow;
//# sourceMappingURL=cow.js.map