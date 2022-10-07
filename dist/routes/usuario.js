"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsers);
router.get('/:id', usuarios_1.getUser);
router.post('/', usuarios_1.postUser);
router.put('/:id', usuarios_1.putUser);
router.delete('/:id', usuarios_1.delUser);
exports.default = router;
//# sourceMappingURL=usuario.js.map