const { UsersRoutes } = require('../app/users/users.module');
const { AuthRoutes } = require('../app/auth/auth.module');

const routes = [
    {
        path: '/users',
        router: UsersRoutes,
    },
    {
        path: '/auth',
        router: AuthRoutes,
    }
];

module.exports = (app) => {
    routes.forEach((route) => {
        app.use(route.path, route.router);
    });
}