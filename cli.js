import { Command } from 'commander';
import { nodePlop } from 'plop';
import path from 'path';

const program = new Command();

program
  .name('ccs-backend-cli')
  .description('CLI tool for generating backend API modules')
  .version('1.0.2', '-v, --version', 'Output the current version');

program
  .command('generate <name>')
  .description('Generate a new backend API module')
  .option('-s, --services', 'Include a service layer')
  .option('-h, --helpers', 'Include helpers')
  .action(async (name, options) => {
    try {
      const plopInstance = nodePlop(path.resolve('./plopfile.js'));
      const generator = plopInstance.getGenerator('API Module');

      const flags = {
        includeService: options.services,
        includeHelpers: options.helpers,
      };

      await generator.runActions({ name, ...flags });
      console.log(`Backend API module "${name}" generated successfully!`);
    } catch (err) {
      console.error('Error generating module:', err.message);
    }
  });

program
  .helpCommand()
  .addHelpText('after', `

Examples:
  $ ccs-backend-cli generate User --services --helpers
  $ ccs-backend-cli generate Product --helpers
  $ ccs-backend-cli generate Order
`);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}