module.exports = ({
    router,
    AuthController,
    AuthValidator,
    makeExpressCallback,
    makeValidatorCallback,
}) => {    
    // login user
    router.post(
        '/login',
        makeValidatorCallback(AuthValidator.postLoginSchema),
        makeExpressCallback(AuthController.loginUser)
    );

    // register user
    router.post(
        '/register',
        makeValidatorCallback(AuthValidator.postRegisterSchema),
        makeExpressCallback(AuthController.registerUser)
    );
    
    return router;
}