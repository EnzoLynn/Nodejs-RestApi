function route(handle,pathname,req,res,type) {  
	 console.log("About to route a request for " + pathname);  
	 if (typeof handle[pathname] === 'function') {   
	 	 handle[pathname](req,res,type);  
	 } else {   
	 	 console.log("No request handler found for " + pathname);  
	 }
}
exports.route = route;