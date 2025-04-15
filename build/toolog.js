"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolog = void 0;
const chalk_1 = __importDefault(require("chalk"));
const boxen_1 = __importDefault(require("boxen"));
const ora_1 = __importDefault(require("ora"));
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
    constructor(logPrefix, spinner) {
        this._logPrefix = chalk_1.default.white('[') + chalk_1.default.blue(logPrefix) + chalk_1.default.white(']: ');
        this._spinner = (0, ora_1.default)({
            prefixText: this._logPrefix.slice(0, -1),
            spinner: spinner
        });
    }
    _log(type, message, ...args) {
        let wasSpinning = false;
        ;
        if (this._spinner.isSpinning) {
            wasSpinning = true;
            this.stop();
        }
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
        if (wasSpinning) {
            this.spinner(this._spinner.text);
        }
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
        this._log('done', ` -> ok${message ? '(' + message + ')' : ''}\n`);
    }
    banner(message) {
        console.log((0, boxen_1.default)(message, {
            borderColor: 'blue',
            width: 80,
            padding: 1,
            textAlignment: "center"
        }));
    }
    spinner(message) {
        this._spinner.start(message);
    }
    stop() {
        this._spinner.stop();
    }
}
exports.Toolog = Toolog;
;
//# sourceMappingURL=toolog.js.map