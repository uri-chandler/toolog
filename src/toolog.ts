import chalk from 'chalk';
import banner from 'cli-banner';

enum LOG_TYPES {
    info  = 'white',
    warn  = 'yellow',
    error = 'red',
    done  = 'green',
    ok    = 'green'
};

export class Toolog {
    _logPrefix:string;

    constructor(logPrefix:string){
        this._logPrefix = chalk.white('[') + chalk.blue(logPrefix) + chalk.white(']: ');
    }

    _log(type: keyof typeof LOG_TYPES, message:any, ...args:any){
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
        this._log('done', ` -> Ok${message ? '('+message+')' : ''}\n`);
    }

    banner(message:string){
        console.log(banner(message, {borderColor: 'blue'}));
    }
};

export const toolog = new Toolog('log');