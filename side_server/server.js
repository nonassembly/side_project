const express=require('express')
const fs=require('fs')
const app=express()

app.get('/universe.obj', function(req, res){
    fs.readFile('./universe.obj', function(err, data){
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Max-Age":"3600",
            "Access-Control-Allow-Headers":"Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
        });
        res.write(data);
        res.end();
    })
})

app.listen(8000);