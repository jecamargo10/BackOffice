var express = require('express');
app = express();

app.use(express.static('dist'))

var port = 80;



app.get('/', function(req, res){
  const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);

});


app.listen(port, function(){
    console.log('server started '+ port);
});
