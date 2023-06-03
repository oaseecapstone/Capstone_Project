module.exports = ({
    router,
    UsersController,
    UsersValidator,
    makeExpressCallback,
    makeValidatorCallback,
}) => {

    // get all users
    router.get('/', makeExpressCallback(UsersController.getAllUsers));

    // get user by id
    router.get(
        '/:id', 
        makeValidatorCallback(UsersValidator.getUserByIdSchema),
        makeExpressCallback(UsersController.getUserById
        )
    );

    // create user
    router.post(
        '/register',
        makeValidatorCallback(UsersValidator.createUserSchema),
        makeExpressCallback(UsersController.registerUser)
    );

    // login user
    router.post(
        '/login',
        makeExpressCallback(UsersController.loginUser)
    );
    
    return router;
}