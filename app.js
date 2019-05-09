const http  = require('http');
const fs = requre('fs');
const _ = require('lodash');

// testing a package
//let example = _.fill([1,2,3,4,5], "banana",1,4);
//console.log(example);


const server = http.createServer((req, res) => {

    //reading static resources
    /*
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type' : 'text/html'});
    readStream.pipe(res);*/

    // check domain
    /*
    if(req.url === '/'){
        res.write('Hellow world from nodejs');
        res.end();
    }
    else{
        res.write('using some other domain');
        res.end();
    }*/
});


server.listen('3000');
