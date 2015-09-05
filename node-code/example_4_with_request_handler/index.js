//assigning the respective modules placed in the required folder to a variable
var router=require("./router");
var server=require("./server1");
var requestHandler=require("./requestHandler");
//defining the handler variable which is actually an object and takes the pathname as its key and the value is assigned to the respective key by executing the pathname
var handle={};
handle["/"]=requestHandler.start;
handle["/start"]=requestHandler.start;
handle["/upload"]=requestHandler.upload;
server.start(handle,router.route);