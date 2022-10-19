"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const express_validator_1 = require("express-validator");
const dbValidators_1 = require("../helpers/dbValidators");
const validation_1 = require("../middlewares/validation");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'Insert an ID').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(dbValidators_1.usuarioValid),
    validation_1.validation
], users_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('email', 'The email is incorrect').isEmail(),
    (0, express_validator_1.check)('password', 'The password must be longer that 6 characters').isLength({ min: 6 }),
    (0, express_validator_1.check)('rfc', 'Invalid RFC').isLength({ min: 12 }),
    validation_1.validation
], users_1.postUser);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'Insert an ID').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(dbValidators_1.usuarioValid),
    validation_1.validation
], users_1.putUser);
router.delete('/:id', [
    validateJWT_1.validateJWT,
    (0, express_validator_1.check)('id', 'Insert an ID').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(dbValidators_1.usuarioValid),
    validation_1.validation
], users_1.delUser);
exports.default = router;
//# sourceMappingURL=users.js.map