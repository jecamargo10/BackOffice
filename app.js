var express = require('express');
app = express();

app.use(express.static('dist'))

var port = 80;

var path = require("path");


app.get('/', function(req, res){
  const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);

});


app.listen(port, function(){
    console.log('server started '+ port);
});
