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