const dataProcess = require("../ultils/dataProcess");

module.exports = {
    Authentication({ username, password }) {
        return new Promise((resolve, reject) => {
            let userObject = {}
            this.verifyUsernameAndPassword({ username, password }).then((result) => {
                userObject = result
                return JwtService.signAndEncryptJwt(userObject)
            }).then(({ accessToken }) => {
                userObject['accessToken'] = accessToken
                delete userObject.password
                resolve(userObject)
            }).catch((err) => {
                reject({
                    messageNode: 'User',
                    message: 'loginFailed'
                })
            });
        })
    },
    verifyUsernameAndPassword({ username, password }) {
        return new Promise((resolve, reject) => {
            let userObject = {}
            User.findOne({ username: username }).then((result) => {
                if (!result) {
                    return Promise.reject()
                }
                userObject = result
                return sails.helpers.passwords.checkPassword(password, userObject.password);
            }).then((result) => {
                resolve(userObject)
            }).catch((err) => {
                reject(err)
            });
        });
    }
}