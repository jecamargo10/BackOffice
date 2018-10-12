var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Cualquier CosaX2');
});


app.get('/getMyDebtMaximo', function(req, res){
    console.log(req.query.id);
	var name = req.query.id;
    // Query to the DataBase Relation or not relational
	
	
    if(name === "1234")
    {
      res.send('Su cesantia fue pagada en el mes de Agosto ');
    }
	else    if(name === "49")
    {
      res.send('Su solicitud decontrato fue aprobado');
    }
		else    if(name === "25")
    {
      res.send('Su solicitud esta en tramite');
    }
			else    if(name === "113")
    {
      res.send('su solicitud fue negada, :(');
    }
	
	
	else    if(name === "1")
    {
      res.send('Javier');
    }
		else    if(name === "2")
    {
      res.send('Oscar');
    }
   else if(name === "456")
    {
      res.send('Tu deuda es de $3´500.000');
    }
    else
     {
       res.send('No tienes deuda');
     }
});










app.get('/getTerpelMiles', function(req, res){
    console.log(req.query.id);
	var name = req.query.id;
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

app.get('/getTerpelLineamientos', function(req, res){
    console.log(req.query.codLineamiento);
	var name = req.query.codLineamiento;
    // Query to the DataBase Relation or not relational
	
	
    if(name === "DATOS")
    {
      res.send('Todas las bases de datos deben ser Microsoft SQL Server');
    }
   else if(name === "SEGURIDAD")
    {
      res.send('Todos los servicios Web deben protegerse usando HTTPS con certificado EV');
    }
    else if(name === "INTEGRACION")
    {
      res.send('Todas las integraciones con SAP deben pasar a través de SAP-PI');
    }
    else
     {
       res.send('Lo siento, ese lineamiento todavía no existe, comumícate con la oficina de arquitectura para su actualización');
     }
});

app.get('/getTerpelPrincipios', function(req, res){
    console.log(req.query.codPrincipio);
	var name = req.query.codPrincipio;
    // Query to the DataBase Relation or not relational
	
	
    if(name === "PORTABILIDAD")
    {
      res.send('Las aplicaciones desde su ingenieria de software deben estar construidas para ser portables');
    }
   else if(name === "INTEGRIDAD")
    {
      res.send('TLos desarrollos deben de tener un ciclo de vida CRUD gestionable y administrable');
    }
    else
     {
       res.send('No hay informacion sobre mas principios');
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
