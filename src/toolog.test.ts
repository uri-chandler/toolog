import { Toolog } from "./toolog.js";


async function main() {
    const logger = new Toolog("toolog-tests");

    logger.banner('Toolog Tests');
    logger.info('This is a test');
    logger.warn('This is a test');
    logger.error('This is a test');
    logger.done('This is a test');
    logger.ok('This is a test');

    logger.spinner("Loading ...");

    await seconds(3);
    logger.info("Info while spinning");

    await seconds(3);
    logger.warn("Info while spinning");

    await seconds(3);
    logger.error("Info while spinning");

    await seconds(3);
    logger.done("Info while spinning");

    await seconds(3);
    logger.ok("Info while spinning");


    await seconds(3);
    logger.stop();
}

async function seconds(ms: number) {
    return new Promise(r => setTimeout(r, ms * 1000));
}




main().catch(console.error);