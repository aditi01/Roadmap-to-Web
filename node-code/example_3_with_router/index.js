var server=require("./server1");
var router=require("./router");
server.start(router.route);