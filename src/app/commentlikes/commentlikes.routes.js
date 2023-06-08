const { auth } = require("../../middlewares");

module.exports = ({
  router,
  CommentLikeController,
  makeExpressCallback,
  makeValidatorCallback,
  CommentLikeValidator,
}) => {
  // auth
  router.use(auth);

  // get commentlike by comment id
  router.get(
    "/comment/:commentId",
    makeValidatorCallback(CommentLikeValidator.getCommentLikeByCommentIdSchema),
    makeExpressCallback(CommentLikeController.getLikesByCommentId)
  );

  // create commentlike
  router.post(
    "/create/:commentId/:userId/:newsId",
    makeValidatorCallback(CommentLikeValidator.createCommentLikeSchema),
    makeExpressCallback(CommentLikeController.createLikes)
  );

  // delete commentlike
  router.delete(
    "/delete/:commentId/:userId/:newsId",
    makeValidatorCallback(CommentLikeValidator.deleteCommentLikeSchema),
    makeExpressCallback(CommentLikeController.deleteLikes)
  );

  return router;
}