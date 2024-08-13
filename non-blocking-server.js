const http = require('http');
const port  = 5001;

const server = http.createServer((req, res)=>{
    if(req.url==='/'){ 
        // Simulate a 5-sec non-blocking operation
        setTimeout(()=>{res.end('Hello World!!\n')}, 5000);
    }else{
        res.end('Not Found\n');
    }
});

server.listen(port, ()=>{
    console.log(`Server running on the port ${port}`);
});
