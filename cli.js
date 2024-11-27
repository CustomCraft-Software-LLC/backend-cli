const { Command } = require('commander');
const { init } = require('plop');

const plop = init();
const program = new Command();

plop.setGenerator('API Module', require('./plopfile'));

program
  .command('generate <name>')
  .description('Generate a new API module (controller and routes)')
  .action((name) => {
    plop.runActions('API Module', { name })
      .then(() => console.log(`API module "${name}" created successfully!`))
      .catch((err) => console.error('Error generating module:', err));
  });

program.parse(process.argv);

if (process.argv.length < 3) {
  program.help();
}