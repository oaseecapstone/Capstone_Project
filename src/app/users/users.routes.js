const { auth } = require('../../middlewares');
const { isAdmin } = require('../../middlewares');
const { isUser } = require('../../middlewares');
const uploadHandler = require('../../middlewares/uploadHandler');

module.exports = ({
    router,
    UsersController,
    UsersValidator,
    makeExpressCallback,
    makeValidatorCallback,
}) => {

    // auth
    router.use(auth);

    // get all users
    router.get(
        '/', 
        makeExpressCallback(UsersController.getAllUsers));

    // get user by id
    router.get(
        '/:id', 
        makeValidatorCallback(UsersValidator.getUserByIdSchema),
        makeExpressCallback(UsersController.getUserById
        )
    );

    // update user
    router.put(
        '/:id',
        makeValidatorCallback(UsersValidator.updateUserSchema),
        uploadHandler.single('image'),
        makeExpressCallback(UsersController.updateUser),
    );
    
    return router;
}