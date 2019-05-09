const http  = require('http');
const fs = require('fs');
const _ = require('lodash');
const express = require('express');
const app = express();


// testing a package
//let example = _.fill([1,2,3,4,5], "banana",1,4);
//console.log(example);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/example', (req,res) => {
    res.send('hitting example route');
});

app.get('/example/:name/:age',(req,res)=> {
    console.log(req.params);
    res.send('example with route params');

})
app.listen(3000);

/*
const server = http.createServer((req, res) => {
    


    //reading static resources
    
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type' : 'text/html'});
    readStream.pipe(res);


    // check domain
    
    if(req.url === '/'){
        res.write('Hellow world from nodejs');
        res.end();
    }
    else{
        res.write('using some other domain');
        res.end();
    }
});

server.listen('3000');*/




