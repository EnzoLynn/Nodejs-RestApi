var http = require('http');
var util = require('util');
var url = require('url');

function start(route, handle) {
    http.createServer(function(req, res) {
        console.log('Request received: ');
        //util.log(util.inspect(req)) // this line helps you inspect the request so you can see whether the data is in the url (GET) or the req body (POST)
        util.log('Request recieved: \nmethod: ' + req.method + '\nurl: ' + req.url) //this line logs just the method and url     

        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        if (pathname.indexOf('.html') != -1) {
            route(handle, 'loadStatic', req, res);
        } else if (pathname.indexOf('.css') != -1) {
            route(handle, 'loadStatic', req, res, 'css');
        } else if (pathname.indexOf('.js') != -1) {
            route(handle, 'loadStatic', req, res, 'js');
        } else if (pathname.indexOf('.gif') != -1||pathname.indexOf('.png') != -1
            ||pathname.indexOf('.jpg') != -1||pathname.indexOf('.tif') != -1) {
            route(handle, 'loadStatic', req, res, 'img');
        }  else {
            route(handle, pathname, req, res);
        }



        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        });

        req.on('data', function(chunk) {
            //console.log(chunk.toString());
        });
        req.on('end', function() {
            console.log("req-end");
            // res.end(JSON.stringify({
            //     msg: "OK"
            // }));
        });

    }).listen(8222, '127.0.0.1');
    console.log('Server running on porthttp://127.0.0.1:8222/');

}
exports.start = start;
