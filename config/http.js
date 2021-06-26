/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'limit',
      'beforeRq',
      'cookieParser',
      'skipper',
      'compress',
      'router',
      'www',
      'poweredBy',
    ],


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/
    beforeRq: (function () {
      return function (req, res, next) {
        req['startRqTime'] = new Date()
        req['private'] = {}
        return next();
      };
    })(),
    poweredBy: function (req, res, next) {
      // or uncomment if you want to replace with your own
      res.set('X-Powered-By', "PHP/5.6.40");
      return next();
    },
    limit: (function () {
      const rateLimit = require("express-rate-limit");
      const limiter = rateLimit({
        windowMs: 60, // 15 minutes
        max: 100,
        message:
          "Too many accounts created from this IP, please try again"
      });
      return limiter
    })(),
    skipper: require('skipper')({
      maxWaitTimeBeforePassingControlToApp: 1000
    })
  },

};
