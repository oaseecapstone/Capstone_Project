const { auth } = require("../../middlewares");

module.exports = ({
  router,
  NewsLikeController,
  makeExpressCallback,
  makeValidatorCallback,
  NewsLikeValidator,
}) => {
  // auth
  router.use(auth);

  // get newslike by news id
  router.get(
    "/news/:newsId",
    makeValidatorCallback(NewsLikeValidator.getNewsLikeByNewsIdSchema),
    makeExpressCallback(NewsLikeController.getLikesByNewsId)
  );

  // create newslike
  router.post(
    "/create/:newsId/:userId",
    makeValidatorCallback(NewsLikeValidator.createNewsLikeSchema),
    makeExpressCallback(NewsLikeController.createLike)
  );

  // delete newslike
  router.delete(
    "/delete/:newsId/:userId",
    makeValidatorCallback(NewsLikeValidator.deleteNewsLikeSchema),
    makeExpressCallback(NewsLikeController.deleteLike)
  );

  return router;
};
