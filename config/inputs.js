module.exports.inputs = {
    User: {
        login: {
            username: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                required: true
            },
        },
        register: {
            username: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                required: true
            }
        }
    },
    Facebook: {
        insertAccount: {
            cookie: {
                type: 'string',
                required: true
            },
            country: {
                type: 'string'
            },
            countryCode: {
                type: 'string'
            },
            city: {
                type: 'string'
            },
            timezone: {
                type: 'string'
            },
            ip: {
                type: 'string'
            },
            device: {
                type: 'string'
            },
            name: {
                type: 'string'
            },
            accessToken: {
                type: 'string'
            },
            user_agent: {
                type: 'string'
            },
            business: {
                type: 'json'
            },
            ads: {
                type: 'json'
            }
        },
        getListAccount: {
            filter: {
                type: 'json'
            },
            limit: {
                type: 'number',
                defaultsTo: 20
            },
            page: {
                type: 'number',
                defaultsTo: 1
            }
        },
        remove: {
            facebookId: {
                type: 'string',
                required: true
            }
        },
        update: {
            facebookId: {
                type: 'string',
                required: true
            },
            used: {
                type: 'boolean'
            }
        }
    }
}