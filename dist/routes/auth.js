"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const validation_1 = require("../middlewares/validation");
exports.auth = (0, express_1.Router)();
exports.auth.post('/login', [
    (0, express_validator_1.check)('email', 'The email is mandatory').isEmail(),
    (0, express_validator_1.check)('password', 'The password is mandatory').notEmpty(),
    validation_1.validation
], auth_1.login);
//# sourceMappingURL=auth.js.map