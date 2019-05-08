var express = require('express');
app = express();

app.use(express.static('./dist'))

var port = 80;



app.get('/', function(req, res){
  res.sendfile( './dist/index.html');
});



app.listen(port, function(){
    console.log('server started '+ port);
});
