var express = require('express');
app = express();

app.use(express.static('dist'))

var port = 8080;
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
res.sendFile('./dist/index.html');

});


app.listen(port, function(){
    console.log('server started '+ port);
});
