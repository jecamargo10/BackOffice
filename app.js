var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Sweet World!');
});

app.get('/getTerpelMiles', function(req, res){
    console.log(req.query.id);
    // Query to the DataBase Relation or not relational
    if(name === "123")
    {
      res.send('Tienes 2400 Puntos');
    }
   else if(name === "456")
    {
      res.send('Tienes 5800 Puntos');
    }
    else
     {
       res.send('Tienes 100 Puntos');
     }
});

app.post('/IngresarPQR', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    // ...
});





app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});
