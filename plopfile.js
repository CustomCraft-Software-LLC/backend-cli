import path from 'path';
import fs from 'fs';

const ensureDirExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

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
      {
        type: 'custom',
        name: 'ensureControllersDir',
        action: () => {
          ensureDirExists(path.join(process.cwd(), 'backend', 'controllers'));
          return 'Ensured controllers directory exists';
        },
      },
      {
        type: 'custom',
        name: 'ensureRoutesDir',
        action: () => {
          ensureDirExists(path.join(process.cwd(), 'backend', 'routes'));
          return 'Ensured routes directory exists';
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
}