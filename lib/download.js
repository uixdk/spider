
var http = require("http");
var Bufferhelper = require('bufferhelper');

module.exports = function(url, callback){
	http.get(url, function(res){
		var bufferHelper = new Bufferhelper();
		res.on("data", function(chunk){
			bufferHelper.concat(chunk);
		});
		res.on("end", function(){
			callback(bufferHelper.toBuffer());
		});
		res.on("error", function(){
			callback(null);
		});
	});
}

