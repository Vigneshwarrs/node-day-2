const http = require('http');
const port = 5000;


//Blocking delay function
function sleep(milliseconds) {
    const start  = Date.now();
    while(Date.now()-start < milliseconds) {
        console.log("Do Nothing");
    }
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    sleep(5000); // Stimulated a 5 sec blocking operatio.
    res.end("Hello World!!\n");
  } else {
    res.end("Not Found!!\n");
  }
}); 

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})