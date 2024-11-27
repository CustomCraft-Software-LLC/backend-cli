const fs = require('fs');
const path = require('path');

module.exports = function (plop) {
    plop.setGenerator('API Module', {
        description: 'Generate a new Express.js API module (controller and routes)',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'API name (e.g., Product, User):',
            },
        ],
        actions: [
            {
                type: 'custom',
                name: 'ensureDirs',
                action: () => {
                    const dirs = ['backend/controllers', 'backend/routes'];
                    dirs.forEach((dir) => {
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir, { recursive: true });
                            console.log(`Created directory: ${dir}`);
                        }
                    });
                    return 'Checked and ensured directories exist.';
                },
            },
            {
                type: 'add',
                path: 'backend/controllers/{{camelCase name}}Controller.js',
                templateFile: 'templates/Controller.js.hbs',
            },
            {
                type: 'add',
                path: 'backend/routes/{{camelCase name}}Routes.js',
                templateFile: 'templates/Routes.js.hbs',
            },
        ],
    });
};