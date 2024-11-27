import path from 'path';

export default function (plop) {
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
      // Create Controller file
      {
        type: 'add',
        path: 'backend/controllers/{{camelCase name}}Controller.js',
        templateFile: 'templates/Controller.js.hbs',
      },
      // Create Routes file
      {
        type: 'add',
        path: 'backend/routes/{{camelCase name}}Routes.js',
        templateFile: 'templates/Routes.js.hbs',
      },
    ],
  });
}