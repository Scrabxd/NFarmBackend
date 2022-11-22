"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileCheck = void 0;
const fileCheck = (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({ msg: 'No files to upload ' });
        return;
    }
    next();
};
exports.fileCheck = fileCheck;
//# sourceMappingURL=fileCheck.js.map