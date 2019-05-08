var express = require('express');
app = express();

//app.use(express.static('dist'))

var port = 80;


app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});



app.listen(port, function(){
    console.log('server started '+ port);
});
