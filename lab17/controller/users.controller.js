exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/lab17/lista'); //Este código se ejecuta cuando la sesión se elimina.
    });
};