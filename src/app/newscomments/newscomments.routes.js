const { auth } = require("../../middlewares");

module.exports = ({
  router,
  NewsCommentController,
  makeExpressCallback,
  makeValidatorCallback,
    NewsCommentValidator,
}) => {
  // auth
  router.use(auth);

    // get news comment by id
    router.get(
        '/:id',
        makeValidatorCallback(NewsCommentValidator.getNewsCommentByIdSchema),
        makeExpressCallback(NewsCommentController.getNewsCommentById),
    );

    // get news comment by news id
    router.get(
        '/news/:newsId',
        makeValidatorCallback(NewsCommentValidator.getNewsCommentByNewsIdSchema),
        makeExpressCallback(NewsCommentController.getNewsCommentByNewsId),
    );

    // get news comment by user id
    router.get(
        '/user/:userId',
        makeValidatorCallback(NewsCommentValidator.getNewsCommentByUserIdSchema),
        makeExpressCallback(NewsCommentController.getNewsCommentByUserId),
    );

    // create news comment
    router.post(
        '/create/:newsId/:userId',
        makeValidatorCallback(NewsCommentValidator.createNewsCommentSchema),
        makeExpressCallback(NewsCommentController.createNewsComment),
    );

    // delete news comment
    router.delete(
        '/delete/:id',
        makeValidatorCallback(NewsCommentValidator.deleteNewsCommentSchema),
        makeExpressCallback(NewsCommentController.deleteNewsComment),
    );

    return router;

};
