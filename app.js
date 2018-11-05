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

	else    if(name === "30")
    {
      res.send('BanEcuador 30');
    }
		else    if(name === "10")
    {
      res.send('Es otra parroquia');
    }
			else    if(name === "18")
    {
      res.send('Legales');
    }
		else    if(name === "7")
    {
      res.send('El numero del Gran Cristiano Ronaldo');
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

app.get('/ObligacionesCliente', function(req, res) {
  var id = req.query.ID_CLIENTE;
  var tipoCliente = req.query.TIPO_CLIENTE;
  var result = [];


  if(id === "1010226035")
  {
    for (var i = 0; i < 2; i++) {
if (i == 0)
{
  result.push({NO_OBLIGACION: "292847577", TIPO_OBLIGACION: "Tarjeta de Crédito",
DESCRIPCION: "Obligación relacionada con una la tarjeta mastercar XXXX-XXXX-XXXX-3342"
,VALOR_OBLIGACION: "450000", FECHA_DESEMBOLSO:"12/01/2017" });

}
if (i == 1)
{
  result.push({NO_OBLIGACION: "1523444", TIPO_OBLIGACION: "Crédito Hipotecario",
  DESCRIPCION: "Deuda Hipotecaria ligada con el bien 000000010034"
  ,VALOR_OBLIGACION: "1200000", FECHA_DESEMBOLSO:"12/01/2018" });

}
    }

    }
 else if(id === "39684753")
  {
    for (var i = 0; i < 1; i++) {
  if (i == 0)
  {
  result.push({NO_OBLIGACION: "2223441", TIPO_OBLIGACION: "Crédito Automotriz",
  DESCRIPCION: "Obligación ligada a la compra del vehículo de placas UUS554"
  ,VALOR_OBLIGACION: "900000", FECHA_DESEMBOLSO:"10/10/2015" });
  }

    }  }
    else if(id === "20180682")
     {
       for (var i = 0; i < 3; i++) {
     if (i == 0)
     {
     result.push({NO_OBLIGACION: "661204958", TIPO_OBLIGACION: "Crédito libre inversión",
     DESCRIPCION: "Crédito libre inversion"
     ,VALOR_OBLIGACION: "352567", FECHA_DESEMBOLSO:"10/10/2000" });
     }
     if (i == 1)
     {
     result.push({NO_OBLIGACION: "0549302", TIPO_OBLIGACION: "Crédito Hipotecario",
     DESCRIPCION: "Deuda Hipotecaria ligada con el bien 223123123123"
     ,VALOR_OBLIGACION: "2000345", FECHA_DESEMBOLSO:"01/30/2012" });
     }
     if (i == 2)
     {
     result.push({NO_OBLIGACION: "221312", TIPO_OBLIGACION: "Crédito Automotriz",
     DESCRIPCION: "Obligación ligada a la compra del vehículo de placas UXX254"
     ,VALOR_OBLIGACION: "300000", FECHA_DESEMBOLSO:"04/20/2018" });
     }

       }  }
       else {


         result.push({NO_OBLIGACION: "34322", TIPO_OBLIGACION: "Tarjeta de Crédito",
       DESCRIPCION: "Obligación relacionada con una la tarjeta mastercar XXXX-XXXX-XXXX-2233"
       ,VALOR_OBLIGACION: "309450", FECHA_DESEMBOLSO:"06/04/2016" });



       }

    res.contentType('application/json');
    res.send(JSON.stringify(result));

});




app.get('/v2/obligacion/:NoObligacion', function(req, res) {

var obligacion = req.params.NoObligacion;
  // Query to the DataBase Relation or not relational
  if(obligacion === "292847577")
  {
    let objetoObligacion = {
      Obligacion:{
      NoObligacion: obligacion,
      TipoObligacion: "Crédito Automotriz",
      DiasMora: "30",
      ValorMora: "350000",
      Refinaciamiento: "NO",
      FechaRefinanciamiento: ""}
    }
    res.contentType('application/json');
res.send(JSON.stringify(objetoObligacion))
  }
 else if(obligacion === "1523444")
  {
    let objetoObligacion = {
      Obligacion:{
      NoObligacion: obligacion,
      TipoObligacion: "Crédito libre inversión",
      DiasMora: "50",
      ValorMora: "1234000",
      Refinaciamiento: "SI",
      FechaRefinanciamiento: "05/10/2015"}
    }
    res.contentType('application/json');
res.send(JSON.stringify(objetoObligacion))
  }
  else
   {
     let objetoObligacion = {
       Obligacion:{
       NoObligacion: obligacion,
       TipoObligacion: "Crédito",
       DiasMora: "0",
       ValorMora: "0",
       Refinaciamiento: "NO",
       FechaRefinanciamiento: ""}
     }
     res.contentType('application/json');
 res.send(JSON.stringify(objetoObligacion))
   }
});

app.get('/getAgente', function(req, res) {

var fecha = req.query.fecha;
var date = new Date(fecha);
var n = date.getDate();
console.log(n);

  if(n%2 === 0)
  {
     res.contentType('application/json');
 res.send(JSON.stringify({agente:"Lisa Jones"}))
   }
   else {
     res.contentType('application/json');

     res.send(JSON.stringify({agente:"John Dunbar"}))

   }
});



app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
