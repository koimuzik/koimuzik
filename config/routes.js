/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/
    /* Users Route */

    'POST  /v1/auth/login': 'User.UserController.login', //done // FRONT DONE
    // 'POST  /v1/auth/register': 'User.UserController.register', //done // FRONT DONE

    'POST  /v1/facebook': 'Facebook.FacebookController.insertAccount', //done // FRONT DONE
    'Get  /v1/facebook': 'Facebook.FacebookController.getListAccount', //done // FRONT DONE
    'POST  /v1/facebook/remove': 'Facebook.FacebookController.remove', //done // FRONT DONE
    'POST  /v1/facebook/update': 'Facebook.FacebookController.update', //done // FRONT DONE
    'GET  /v1/tutorial': 'Tutorial.TutorialController.getList', //done // FRONT DONE
    'GET  /v1/tutorial/file': 'Tutorial.TutorialController.file', //done // FRONT DONE

    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the routes in this file, it   *
     * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
     * not match any of those, it is matched against static assets.             *
     *                                                                          *
     ***************************************************************************/


};