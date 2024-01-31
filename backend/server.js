const http = require('http');

const server = http.createServer((req,res)=>
{res.end('Firas Abidli  !!');
});
server.listen(3001);