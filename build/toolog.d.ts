import { Ora } from 'ora';
declare enum LOG_TYPES {
    info = "white",
    warn = "yellow",
    error = "red",
    done = "green",
    ok = "green"
}
export declare class Toolog {
    _logPrefix: string;
    _spinner: Ora;
    constructor(logPrefix: string, spinner?: string);
    _log(type: keyof typeof LOG_TYPES, message: any, ...args: any): void;
    info(message?: any, ...args: any): void;
    warn(message?: any, ...args: any): void;
    error(message?: any, ...args: any): void;
    done(message?: any, ...args: any): void;
    ok(message?: string): void;
    banner(message: string): void;
    spinner(message?: string): void;
    stop(): void;
}
export {};
//# sourceMappingURL=toolog.d.ts.map