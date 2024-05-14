import fs from 'fs';
import { promisify } from 'util';

export function getAllFiles(path: string): Promise<string[]> {
  return promisify(fs.readdir)(path);
}

export function writeFile(path: string, data: string): Promise<void> {
  return promisify(fs.writeFile)(path, data);
}
