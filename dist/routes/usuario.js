"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const express_validator_1 = require("express-validator");
const dbValidators_1 = require("../helpers/dbValidators");
const validation_1 = require("../middlewares/validation");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'Inserte un ID').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(dbValidators_1.usuarioValid),
    validation_1.validation
], usuarios_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('email', 'El correo electronico es incorrecto').isEmail(),
    (0, express_validator_1.check)('password', 'la contraseña debe ser mayor a 6 letras').isLength({ min: 6 }),
    validation_1.validation
], usuarios_1.postUser);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'Inserte un ID').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(dbValidators_1.usuarioValid),
    validation_1.validation
], usuarios_1.putUser);
router.delete('/:id', [
    validateJWT_1.validateJWT,
    (0, express_validator_1.check)('id', 'Inserte un ID').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(dbValidators_1.usuarioValid),
    validation_1.validation
], usuarios_1.delUser);
exports.default = router;
//# sourceMappingURL=usuario.js.map