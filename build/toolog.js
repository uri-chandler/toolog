"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolog = exports.Toolog = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cli_banner_1 = __importDefault(require("cli-banner"));
var LOG_TYPES;
(function (LOG_TYPES) {
    LOG_TYPES["info"] = "white";
    LOG_TYPES["warn"] = "yellow";
    LOG_TYPES["error"] = "red";
    LOG_TYPES["done"] = "green";
    LOG_TYPES["ok"] = "green";
})(LOG_TYPES || (LOG_TYPES = {}));
;
class Toolog {
    constructor(logPrefix) {
        this._logPrefix = chalk_1.default.white('[') + chalk_1.default.blue(logPrefix) + chalk_1.default.white(']: ');
    }
    _log(type, message, ...args) {
        if (typeof message !== 'string') {
            try {
                message = JSON.stringify(message);
            }
            catch (e) {
                message = message.toString();
            }
        }
        const color = LOG_TYPES[type];
        console.log(this._logPrefix + chalk_1.default[color](message), ...args);
    }
    info(message, ...args) {
        this._log('info', message, ...args);
    }
    warn(message, ...args) {
        this._log('warn', message, ...args);
    }
    error(message, ...args) {
        this._log('error', message, ...args);
    }
    done(message, ...args) {
        this._log('done', message, ...args);
    }
    ok(message) {
        this._log('done', ` -> Ok${message ? '(' + message + ')' : ''}\n`);
    }
    banner(message) {
        console.log((0, cli_banner_1.default)(message, { borderColor: 'blue' }));
    }
}
exports.Toolog = Toolog;
;
exports.toolog = new Toolog('log');
//# sourceMappingURL=toolog.js.map