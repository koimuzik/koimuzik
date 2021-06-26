const dataProcess = require('../../ultils/dataProcess')
const AuthService = require('../../services/AuthService')

module.exports = {
    login: ({
        inputs: sails.config.inputs.User.login,
        exits: sails.config.responseType,
        fn: async function (inputs, exits) {
            AuthService.Authentication(inputs).then((result) => {
                exits.successRequest({
                    messageNode: 'User',
                    message: 'loginSucess',
                    data: result
                });
            }).catch((err) => {
                sails.checkErrorOutput(err, exits);
            });
        }
    }),
    register: ({
        inputs: sails.config.inputs.User.register,
        exits: sails.config.responseType,
        fn: async function (inputs, exits) {
            dataProcess.createDocument(User, inputs).then((result) => {
                exits.successRequest({
                    messageNode: 'GlobalNotifications',
                    message: 'success',
                    data: result
                });
            }).catch((err) => {
                sails.checkErrorOutput(err, exits);
            });
        }
    }),
}