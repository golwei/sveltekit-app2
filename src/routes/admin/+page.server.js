import fs from 'fs';
import path from 'path';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const filesPath = path.join(process.cwd(), 'static');
    const files = fs.readdirSync(filesPath);
    let filexx = files.filter(file => path.extname(file) === '.png');
    return {
        path: filexx
    };
};