let userNotify = require('../../config/notification');
module.exports = function (inputObject) {
    let res = this.res
    let detailNotify = userNotify.notification[inputObject.messageNode][inputObject.message];

    // console.log(detailNotify, 'detailNotify')
    let responseToClient = {
    };
    if (detailNotify && detailNotify.message) {
        responseToClient.message = detailNotify.message;
    }
    if (inputObject.data) {
        responseToClient.data = inputObject.data;
    }
    // if (!responseToClient.message) {
    //     responseToClient.message = 'errorWhileProcess'
    // }

    res.send(responseToClient);

}