import chalk from 'chalk';
import boxen from 'boxen';
import ora from 'ora';
var LOG_TYPES;
(function (LOG_TYPES) {
    LOG_TYPES["info"] = "white";
    LOG_TYPES["warn"] = "yellow";
    LOG_TYPES["error"] = "red";
    LOG_TYPES["done"] = "green";
    LOG_TYPES["ok"] = "green";
})(LOG_TYPES || (LOG_TYPES = {}));
;
export class Toolog {
    constructor(logPrefix, spinner) {
        this._logPrefix = chalk.white('[') + chalk.blue(logPrefix) + chalk.white(']: ');
        this._spinner = ora({
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
        console.log(this._logPrefix + chalk[color](message), ...args);
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
        console.log(boxen(message, {
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
;
//# sourceMappingURL=toolog.js.map