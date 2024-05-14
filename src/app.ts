import { Command } from 'commander';
import figlet from 'figlet';

import { generateCode } from './generator/code-generator.js';
import { getAllFiles, writeFile } from './helper/file-helper.js';

const program = new Command();

program.name('dcg').description('Convert HTML markup to JavaScript DOM code');

console.log(figlet.textSync('DOM Code Generator'));

program
  .command('convert')
  .requiredOption(
    '--sourcePath, <value>',
    'source folder path of the HTML files'
  )
  .requiredOption(
    '--targetPath <value>',
    'target folder path for the generated JavaScript files'
  )
  .option('--rootId <value>', 'root id to attach the elements to')
  .action(async (options) => {
    console.log('op', options);
    const files = await getAllFiles(options.sourcePath);

    for await (let file of files) {
      const code = generateCode(file, options.rootId ?? 'root');

      writeFile(options.targetPath, code.toString());
    }
  });

program.parse();

//node dist/app.js convert --sourcePath "C:\Users\Patrick\Documents\webApps\dom-code-generator\source" --targetPath "C:\Users\Patrick\Documents\webApps\dom-code-generator\target"

//npm run start convert --sourcePath "C:\Users\Patrick\Documents\webApps\dom-code-generator\source" --targetPath "C:\Users\Patrick\Documents\webApps\dom-code-generator\target"
