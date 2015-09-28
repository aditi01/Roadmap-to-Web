var router=require("./router");
var server=require("./server");
var requestHandler=require("./requestHandler");
var handle={};
handle["/"]=requestHandler.start;
handle["/start"]=requestHandler.start;
handle["/upload"]=requestHandler.upload;

server.start(router.route, handle);