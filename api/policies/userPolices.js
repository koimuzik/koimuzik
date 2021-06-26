const JwtService = require('../services/JwtService');
module.exports = async function (req, res, proceed) {
    var responseObject = {
        message: 'tokenRequired'
    }
    if (!req.headers['authorization']) {
        return res.status(401).json(responseObject);
    }
    var accessToken = req.headers['authorization']
    JwtService.verifyToken(accessToken).then((result) => {
        req['private'].userObject = result
        return proceed()
    }).catch((err) => {
        responseObject.message = err
        return res.status(401).json(responseObject);
    });
};

