var express = require('express');
app = express();

//app.use(express.static('dist'))

  //server.use('/media', express.static(__dirname + '/media'));
  app.use(express.static(__dirname + '/dist'));
//  app.use(express.static('dist'))


var port = 80;
console.log("Stuff");

var path = require("path");
console.log(__dirname);
if (!__dirname)
{
  __dirname = path.resolve(path.dirname(''));

  }

app.get('/', function(req, res){
//  const index = path.join(__dirname, 'dist', 'index.html');
//  res.sendFile(index);
//res.sendFile('./dist/index.html');
res.sendFile('dist/index.html', { root: __dirname });


});


app.listen(port, function(){
    console.log('server started '+ port);
});
