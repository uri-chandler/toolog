"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolog_1 = require("./toolog");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = new toolog_1.Toolog("toolog-tests");
        logger.banner('Toolog Tests');
        logger.info('This is a test');
        logger.warn('This is a test');
        logger.error('This is a test');
        logger.done('This is a test');
        logger.ok('This is a test');
        logger.spinner("Loading ...");
        yield seconds(3);
        logger.info("Info while spinning");
        yield seconds(3);
        logger.warn("Info while spinning");
        yield seconds(3);
        logger.error("Info while spinning");
        yield seconds(3);
        logger.done("Info while spinning");
        yield seconds(3);
        logger.ok("Info while spinning");
        yield seconds(3);
        logger.stop();
    });
}
function seconds(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(r => setTimeout(r, ms * 1000));
    });
}
main().catch(console.error);
//# sourceMappingURL=toolog.test.js.map