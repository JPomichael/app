
var http = require('http');
var querystring = require('querystring');
 
var contents = querystring.stringify({
             XAction:'wwGetDataList',
             XKLX:'sygr',
             TblNum: 8002,
             T34: 'EQ8003',
             orderby: 'id asc',
});
 
var options = {
    host:'192.168.28.251',  
    port:8067,  
    method:'POST',  
    path:'/wwSYGR/wwData/wwDataManageGR.ashx', 
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
}
 
var req = http.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log(data);   //一段html代码
    });
});
 
req.write(contents);
req.end;



