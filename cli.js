import { Command } from 'commander';
import { nodePlop } from 'plop';
import path from 'path';

const plop = nodePlop(path.resolve('./plopfile.js'));
const program = new Command();

program
    .command('generate <name>')
    .description('Generate a new API module (controller and routes)')
    .action(async (name) => {
        try {
            const generator = plop.getGenerator('API Module');
            await generator.runActions({ name });
            console.log(`API module "${name}" created successfully!`);
        } catch (err) {
            console.error('Error generating module:', err.message);
        }
    });

program.parse(process.argv);

if (process.argv.length < 3) {
    program.help();
}