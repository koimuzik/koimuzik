const FacebookService = require("../../services/FacebookService")
const dataProcess = require("../../ultils/dataProcess")
const crypto = require('crypto');
module.exports = {
    insertAccount: ({
        inputs: sails.config.inputs.Facebook.insertAccount,
        exits: sails.config.responseType,
        fn: async function(inputs, exits) {
            console.log(inputs)
            let documentCreate = inputs
            documentCreate['uid'] = sails.Ultils.getBW(inputs.cookie, 'c_user=', ';')
            dataProcess.createDocument(Facebook, documentCreate).then((result) => {
                exits.successRequest({
                    messageNode: 'GlobalNotifications',
                    message: 'success'
                });
            }).catch((err) => {
                sails.checkErrorOutput(err, exits);
            });
        }
    }),
    getListAccount: ({
        inputs: sails.config.inputs.Facebook.getListAccount,
        exits: sails.config.responseType,
        fn: async function(inputs, exits) {
            let filterFacebooks = {
                condition: {

                },
                limit: inputs.limit,
                page: inputs.page,
                orderBy: 'createdAt DESC'
            }
            if (inputs.filter) {
                filterFacebooks.condition = inputs.filter
            }
            dataProcess.getListDataFromModel(Facebook, filterFacebooks).then((result) => {
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
    remove: ({
        inputs: sails.config.inputs.Facebook.remove,
        exits: sails.config.responseType,
        fn: async function(inputs, exits) {
            let { facebookId } = inputs
            dataProcess.removeDocument(Facebook, { conditionRemove: { id: facebookId } }).then((result) => {
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
    update: ({
        inputs: sails.config.inputs.Facebook.update,
        exits: sails.config.responseType,
        fn: async function(inputs, exits) {
            let { facebookId, used } = inputs
            let updateObject = {
                used: used
            }
            dataProcess.updateDocument(Facebook, { condition: { id: facebookId }, updateObject }).then((result) => {
                exits.successRequest({
                    messageNode: 'GlobalNotifications',
                    message: 'success',
                    data: result
                });
            }).catch((err) => {
                sails.checkErrorOutput(err, exits);
            });
        }
    })
}