const http = require("http");
const server = http.createServer();

server.listen(8855,()=>{
    console.log("http://127.0.0.1:8855");
});
let d = "";

const req = http.request({
    hostname: 'www.dataiqs.com',//https://dataiqs.com/api/netease/music/?type=songid&id=2026224214
    path: '/api/netease/music/?songid&id=2026224214',
    method: 'GET'
},(res)=>{
    res.on('data',(data)=>{
        d = data;
    })
    res.on("end",()=>{
        // console.log(d.toString());
    })
})
req.end();

// console.log(d);

server.on("request",(req,res)=>{
    res.setHeader("Content-type","text/html;charset=utf-8");
    res.write(d);
    res.end();
})
