function start(a, b, c, d) {

    console.log("Request handler 'start' was called.");
}


function upload(req, res) {
    console.log("Request handler 'upload' was called.");
    var restApi = require('./restApi.js');
    rest.ajax();
}

function getMsg(req, res) {

    console.log("Request handler 'getMsg11' was called.");
    res.writeHeader(200, {
        "Content-Type": "text/html"
    });
    res.end(JSON.stringify({
        msg: "O11K"
    }));
    //debugger;
    console.log("Request handler 'getMsg223' was called.");
}

function nodejsLogin(req, res) {
    console.log("Request handler 'nodejsLogin' was called.========");
    var restApi = require('./restApi.js');
    var query = require("querystring");
    var postdata = "";
    req.on("data", function(postchunk) {
            postdata += postchunk.toString();
        })
        //POST结束输出结果
    req.on("end", function() {
        console.log(JSON.stringify(query.parse(postdata)) + '===========');
        restApi.ajax(res, {
            host: '127.0.0.1',
            port: 818,
            path: '/login/ajaxLogin'
        }, query.parse(postdata));
    })

}

function loadStatic(req, res, type) {
    var fs = require('fs');
    var url = require('url');

    //var html = fs.readFileSync('.' + url.parse(req.url).pathname);
    fs.readFile('.' + url.parse(req.url).pathname, function(err, html) {
       
        if (type) {
            if (type == "css") {
                console.log("css");
                res.writeHeader(200, {
                    "Content-Type": "text/css"
                });
            } else if (type == "js") {
                res.writeHeader(200, {
                    "Content-Type": "application/javascript"
                });
            } else if (type == "img") {
                res.writeHeader(200, {
                    "Content-Type": "image/gif"
                });
            }

        } else {
            res.writeHeader(200, {
                "Content-Type": "text/html"
            });
        }

        res.write(html);
        res.end();
    });



}

exports.start = start;
exports.upload = upload;
exports.getMsg = getMsg;
exports.nodejsLogin = nodejsLogin;
exports.loadStatic = loadStatic;
