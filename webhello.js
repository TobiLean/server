#!/usr/bin/env node 

const port = (process.argv[2] || process.env.PORT || 3000), 
http = require('http');

function capitalize (str) {

    var first_letter = str[0].toUpperCase();
    str = str.trim().toLowerCase().substring(1);
    var new_str = first_letter + str

    return new_str;
}

function textOnly (str){

    return str
    .replace(/[^\w.,-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

http.createServer((request, response) => {

    console.log(request.url);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    const name_arg = capitalize(textOnly(request.url) || 'World');

    response.end(`<p>Hello ${name_arg}</p>`);
}).listen(port);

console.log(`Server is running at http://localhost:${ port }/`);
