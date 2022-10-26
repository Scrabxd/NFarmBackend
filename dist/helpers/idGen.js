"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idGen = void 0;
const idGen = () => {
    let idGenerated = Math.ceil(Math.random() * 1000000000) + 100;
    return {
        idGenerated
    };
};
exports.idGen = idGen;
//# sourceMappingURL=idGen.js.map