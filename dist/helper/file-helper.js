import fs from 'fs';
import { promisify } from 'util';
export function getAllFiles(path) {
    return promisify(fs.readdir)(path);
}
export function writeFile(path, data) {
    return promisify(fs.writeFile)(path, data);
}
//# sourceMappingURL=file-helper.js.map