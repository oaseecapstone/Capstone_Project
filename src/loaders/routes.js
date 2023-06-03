const { UsersRoutes } = require('../app/users/users.module');

const routes = [
    {
        path: '/users',
        router: UsersRoutes,
    },
];

module.exports = (app) => {
    routes.forEach((route) => {
        app.use(route.path, route.router);
    });
}