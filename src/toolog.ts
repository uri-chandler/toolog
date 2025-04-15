import chalk from 'chalk';
import boxen from 'boxen';
import ora, { Ora } from 'ora';

enum LOG_TYPES {
    info  = 'white',
    warn  = 'yellow',
    error = 'red',
    done  = 'green',
    ok    = 'green'
};

export class Toolog {
    _logPrefix:string;
    _spinner: Ora;

    constructor(logPrefix:string, spinner?: string) {
        this._logPrefix = chalk.white('[') + chalk.blue(logPrefix) + chalk.white(']: ');
        this._spinner = ora({
            prefixText: this._logPrefix.slice(0, -1),
            spinner: spinner as any
        });
    }

    _log(type: keyof typeof LOG_TYPES, message:any, ...args:any){
        let wasSpinning: boolean = false;;
        if (this._spinner.isSpinning) {
            wasSpinning = true;
            this.stop();
        }

        if (typeof message !== 'string'){
            try {
                message = JSON.stringify(message)
            }
            catch(e) {
                message = message.toString();
            }
        }

        const color = LOG_TYPES[type];
        console.log(this._logPrefix + chalk[color](message), ...args);

        if (wasSpinning) {
            this.spinner(this._spinner.text);
        }
    }

    info(message?:any, ...args:any) {
        this._log('info', message, ...args);
    }

    warn(message?:any, ...args:any) {
        this._log('warn', message, ...args);
    }

    error(message?:any, ...args:any) {
        this._log('error', message, ...args);
    }

    done(message?:any, ...args:any) {
        this._log('done', message, ...args);
    }

    ok(message?:string) {
        this._log('done', ` -> ok${message ? '('+message+')' : ''}\n`);
    }

    banner(message:string){
        console.log(
            boxen(
                message,
                {
                    borderColor: 'blue',
                    width: 80,
                    padding: 1,
                    textAlignment: "center"
                }
            )
        );
    }

    spinner(message?: string) {
        this._spinner.start(message);
    }

    stop() {
        this._spinner.stop();
    }
};