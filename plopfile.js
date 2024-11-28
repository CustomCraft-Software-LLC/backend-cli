export default function (plop) {
  plop.setGenerator('API Module', {
    description: 'Generate a new Express.js API module (controller, routes, services, and helpers)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'API name:',
      },
      {
        type: 'confirm',
        name: 'includeController',
        message: 'Do you want to include a controller?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'includeRoutes',
        message: 'Do you want to include routes?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'includeService',
        message: 'Do you want to include a service layer?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'includeHelpers',
        message: 'Do you want to include helpers?',
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [];
      if (data.includeController) {
        actions.push({
          type: 'add',
          path: 'backend/controllers/{{camelCase name}}Controller.js',
          templateFile: 'templates/Controller.js.hbs',
        });
      }
      if (data.includeRoutes) {
        actions.push({
          type: 'add',
          path: 'backend/routes/{{camelCase name}}Routes.js',
          templateFile: 'templates/Routes.js.hbs',
        });
      }
      if (data.includeService) {
        actions.push({
          type: 'add',
          path: 'backend/services/{{camelCase name}}Service.js',
          templateFile: 'templates/Service.js.hbs',
        });
      }
      if (data.includeHelpers) {
        actions.push({
          type: 'add',
          path: 'backend/helpers/{{camelCase name}}Helpers.js',
          templateFile: 'templates/Helpers.js.hbs',
        });
      }
      return actions;
    },
  });
}