"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const validation_1 = require("../middlewares/validation");
const upload_1 = require("../controllers/upload");
const upload = (0, express_1.Router)();
upload.get('/', [
    middlewares_1.validateAPIKey,
    validation_1.validation
], upload_1.uploadManager);
exports.default = upload;
//# sourceMappingURL=uploads.js.map