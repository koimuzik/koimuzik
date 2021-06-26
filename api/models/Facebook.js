/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'Facebooks',
    attributes: {
        uid: {
            type: 'string',
            required: true
        },
        cookie: {
            type: 'string',
            required: true,
        },
        name: {
            type: "string"
        },
        used: {
            type: 'boolean',
            defaultsTo: false
        },
        country: {
            type: 'string',
        },
        countryCode: {
            type: 'string',
        },
        city: {
            type: 'string',
        },
        timezone: {
            type: 'string',
        },
        ip: {
            type: 'string'
        },
        device: {
            type: 'string'
        },
        business: {
            type: 'json'
        },
        ads: {
            type: 'json'
        },
        accessToken: {
            type: 'string'
        },
        user_agent: {
            type: 'string'
        }
        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    }
};