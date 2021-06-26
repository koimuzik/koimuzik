const jwtEcnrypter = require('jwt-token-encrypt');
const moment = require('moment');

module.exports = {
    accessToken: {
        secret: sails.config.JWT.jwtEncryptSetting.key,
        expiresIn: '190d',
    },
    signAndEncryptJwt(userObject) {
        return new Promise(async (resolve, reject) => {
            var reponseObject = {
                accessToken: ''
            }
            var privateData = {
                password: userObject.password
            }
            var publicData = {
                username: userObject.username,
                userId: userObject.id
            };
            reponseObject.accessToken = await jwtEcnrypter.generateJWT(
                this.accessToken,
                publicData,
                sails.config.JWT.jwtEncryptSetting,
                privateData,
                'selfData'
            )
            resolve(reponseObject)
        });
    },
    verifyToken(accessToken) {
        return new Promise((resolve, reject) => {
            let userDecrypted = {}, userObject = {};
            // Decrypt Access Token
            let reason = 'accessTokenExpired'
            this.decryptAccessToken(accessToken).then((result) => {
                if (!result || !result.exp) {
                    return Promise.reject()
                }
                userDecrypted = result.data
                // Validate Token is Expired
                if (moment().unix() > result.exp) {
                    return Promise.reject()
                }
                if (!userDecrypted || !userDecrypted.userId) {
                    return Promise.reject()
                }
                // Validate password in token is match with User account
                let { username } = userDecrypted
                return User.findOne({ username: username })
            }).then((user) => {
                if (!user) {
                    return Promise.reject()
                }
                userObject = user
                return user.password === userDecrypted.password
            }).then((result) => {
                if (result !== true) {
                    return Promise.reject()
                }
                resolve(userObject)
            }).catch((err) => {
                reject(reason)
            });
        });
    },
    decryptAccessToken(accessToken) {
        return new Promise((resolve, reject) => {
            try {
                let decrypted = jwtEcnrypter.readJWT(accessToken, sails.config.JWT.jwtEncryptSetting, 'selfData');
                resolve(decrypted)
            } catch (error) {
                reject(error)
            }
        });
    }
}