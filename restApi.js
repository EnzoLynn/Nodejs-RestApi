function ajax(res,optins,postParam) {
    var http = require('http');
    var querystring = require('querystring');
    var equal = require('assert').equal;
    var username = 'falcon';
    var password = '';
    var _auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
    var postData = querystring.stringify(postParam);

    console.log("postdata===="+postData);
    var options = {
        host: optins.host,//'127.0.0.1',
        port:optins.port,// 818,
        path:optins.path,// '/login/ajaxLogin',
        method:optins.method?optins.method:'POST',
        headers: {
            'accept': '*/*',
            'content-type': 'application/x-www-form-urlencoded;charset:utf-8',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
            'authorization': _auth,
            'user-agent': 'nodejs rest client',
            'Content-Length': postData.length
        }
    };

    var req = http.request(options, function(res1) {
        console.log('STATUS: ' + res1.statusCode);
        equal(200, res1.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res1.headers));
        var data = "";
        res1.on('data', function(chunk) { 
            console.log('BODY: ' + chunk);
            data = chunk;
        });
        res1.on('end', function(chunk) {
            res.end(data);
            //res.end(JSON.stringify(data));
        })

    });
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    req.write(postData);

    req.end();
}

exports.ajax = ajax;
