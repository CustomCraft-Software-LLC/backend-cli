import { Command } from 'commander';
import { nodePlop } from 'plop';
import path from 'path';

const program = new Command();

program
	.command('generate <name>')
	.description('Generate a new API module (controller and routes)')
	.action(async (name) => {
		try {
			const plopInstance = nodePlop(path.resolve('./plopfile.js'));
			const generator = plopInstance.getGenerator('API Module');

			await generator.runActions({ name });
			console.log(`API module "${name}" created successfully!`);
    	} catch (err) {
      		console.error('Error generating module:', err.message);
    	}
    });

program
	.version('1.0.0', '-v, --version', 'Output the current version')
	.description('CLI tool for generating API modules with Plop');

program.parse(process.argv);

if (process.argv.length < 3) {
  program.help();
}