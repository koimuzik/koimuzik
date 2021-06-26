const fs = require('fs');
const path = require('path');
module.exports = {
    getList: ({
        inputs: {},
        exits: sails.config.responseType,
        fn: async function(inputs, exits) {
            let data = [{
                    title: '21 Ways to Improve Your Facebook Ads With Better Targeting',
                    pdf: "https://api.cling.pro/v1/tutorial/file?name=21 Ways to Improve Your Facebook Ads With Better Targeting",
                },
                {
                    title: '21 Ways to Improve Your Facebook Ads With Better Targeting',
                    pdf: "https://api.cling.pro/v1/tutorial/file?name=21 Ways to Improve Your Facebook Ads With Better Targeting",
                },
            ]
            exits.successRequest({
                messageNode: 'GlobalNotifications',
                message: 'success',
                data: data
            });
        }
    }),
    file: ({
        inputs: {},
        exits: sails.config.responseType,
        fn: async function(inputs, exits) {
            let { query: { name = null } = {} } = this.req
            if (!name) {
                return this.res.send(false)
            }
            let res = this.res
            let pathimg = path.join(sails.staticDir, `${name}.pdf`)
            if (fs.existsSync(pathimg)) {
                var datastream = fs.createReadStream(pathimg)
                datastream.pipe(res, { end: false });
                datastream.on('end', function() {
                    res.end("';");
                });
            } else {
                return this.res.send(false)

            }
        }
    }),
}