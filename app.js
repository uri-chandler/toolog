const colors    = require('colors');
const cliBanner = require('cli-banner');

const colorTypesMap = {
    info : 'white',
    warn : 'yellow',
    error: 'red',
    done : 'green'
};

module.exports = class Toolog {
    constructor(toolName){
        this._logPrefix = '['.white + toolName.blue + ']: '.white;
    }

    _log(type, msg, ...args){
        console.log(this._logPrefix + msg[colorTypesMap[type]], ...args);
    }

    info(msg, ...args) {
        this._log('info', msg, ...args);
    }

    warn(msg, ...args) {
        this._log('warn', msg, ...args);
    }

    error(msg, ...args) {
        this._log('error', msg, ...args);
    }

    done(msg, ...args) {
        this._log('done', msg, ...args);
    }

    banner(msg){
        console.log(cliBanner(msg, {borderColor: 'blue'}));
    }
};