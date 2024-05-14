var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import { Command } from 'commander';
import figlet from 'figlet';
import { generateCode } from './generator/code-generator.js';
import { getAllFiles, writeFile } from './helper/file-helper.js';
const program = new Command();
program.name('dcg').description('Convert HTML markup to JavaScript DOM code');
console.log(figlet.textSync('DOM Code Generator'));
program
    .command('convert')
    .requiredOption('--sourcePath, <value>', 'source folder path of the HTML files')
    .requiredOption('--targetPath <value>', 'target folder path for the generated JavaScript files')
    .option('--rootId <value>', 'root id to attach the elements to')
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    var _d;
    console.log('op', options);
    const files = yield getAllFiles(options.sourcePath);
    try {
        for (var _e = true, files_1 = __asyncValues(files), files_1_1; files_1_1 = yield files_1.next(), _a = files_1_1.done, !_a; _e = true) {
            _c = files_1_1.value;
            _e = false;
            let file = _c;
            const code = generateCode(file, (_d = options.rootId) !== null && _d !== void 0 ? _d : 'root');
            writeFile(options.targetPath, code.toString());
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_e && !_a && (_b = files_1.return)) yield _b.call(files_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}));
program.parse();
//node dist/app.js convert --sourcePath "C:\Users\Patrick\Documents\webApps\dom-code-generator\source" --targetPath "C:\Users\Patrick\Documents\webApps\dom-code-generator\target"
//# sourceMappingURL=app.js.map