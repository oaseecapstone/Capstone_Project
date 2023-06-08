const { UsersRoutes } = require('../app/users/users.module');
const { AuthRoutes } = require('../app/auth/auth.module');
const { NewsRoutes } = require('../app/news/news.module');
const { NewsLikeRoutes } = require('../app/newslikes/newslikes.module');
const { NewsCommentRoutes } = require('../app/newscomments/newscomments.module');

const routes = [
    {
        path: '/users',
        router: UsersRoutes,
    },
    {
        path: '/auth',
        router: AuthRoutes,
    },
    {
        path: '/news',
        router: NewsRoutes,
    },
    {
        path: '/newslike',
        router: NewsLikeRoutes,
    },
    {
        path: '/newscomment',
        router: NewsCommentRoutes,
    },
];

module.exports = (app) => {
    routes.forEach((route) => {
        app.use(route.path, route.router);
    });
}