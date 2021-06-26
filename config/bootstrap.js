/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {
    const moment = require('moment-timezone');
    const crypto = require('crypto');
    const path = require('path');
    const jwtEcnrypter = require('jwt-token-encrypt');
    const ErrorOutput = require('../api/ultils/errorOutput')
    const Ultils = require('../api/ultils/Ultils');
    const AutoIndex = require('../api/ultils/autoIndex');
    const fs = require('fs');
    const Promise = require('bluebird');
    sails.PromiseMap = Promise.map
    sails.Ultils = new Ultils()
    sails.checkErrorOutput = new ErrorOutput().checkErrorOutput
    sails.config.port = 1996
    sails.moment = moment
    sails.crypto = crypto
    sails.staticDir = path.join(__dirname, '../assets')
    sails.objectId = require('mongodb').ObjectID;
};