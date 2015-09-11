var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/getMsg"] = requestHandlers.getMsg;
handle["/nodejsLogin"] = requestHandlers.nodejsLogin;
handle["loadStatic"] = requestHandlers.loadStatic; 

server.start(router.route,handle);