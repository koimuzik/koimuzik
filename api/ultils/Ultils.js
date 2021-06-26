const request = require('request-promise');
module.exports = class Ultils {
    _request({ url, payload, options }) {
        return new Promise((resolve, reject) => {
            if (!payload) {
                payload = {}
            }
            let params = {
                method: Object.keys(payload).length ? "POST" : "GET",
                url: url,
                json: true,
                followAllRedirects: true,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-user': '?1',
                    'upgrade-insecure-requests': 1,
                    'cache-control': 'max-age=0'
                },
            };
            if (options) {
                let { headers, json, cookie, jar, fullRes, proxy, socks5 } = options
                if (headers) {
                    params.headers = headers
                }
                if (json) {
                    params.json = json
                }
                if (cookie) {
                    params.headers = Object.assign(params.headers, { cookie: cookie })
                }
                if (jar) {
                    params.jar = jar
                }
                if (fullRes) {
                    params.resolveWithFullResponse = true
                }
                if (proxy) {
                    params.proxy = proxy
                }
            }
            if (params.method == 'POST') {
                params.form = payload
            }
            request(params).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getBW(text, Start, End) {
        var ret = text.split(Start);
        if (ret[1]) {
            ret = ret[1].split(End);
            return ret[0];
        };
        return 0;
    }
}