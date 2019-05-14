var axios = require('axios');
var express = require('express');
app = express();
var router = express.Router();
var cors =  require('cors')
var bodyParser = require('body-parser')

app.use(cors())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/api/v1', router)
app.use(express.static('dist'))
const testFolder = './tests/';

//app.use(express.static('dist'))

//server.use('/media', express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/dist'));


var port = 80;
console.log("Stuff");

var path = require("path");
console.log(__dirname);
if (!__dirname)
{
  __dirname = path.resolve(path.dirname(''));

  }
  app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
    
});
/**

app.get('/', function(req, res){
//  const index = path.join(__dirname, 'dist', 'index.html');
//  res.sendFile(index);
//res.sendFile('./dist/index.html');
res.sendFile('dist/index.html', { root: __dirname });


});*/

const HEADERS = {'Authorization': 'Basic QWRtaW4xOnNsZWF6eUNyZXN0KzI='};

//recibe cc, id, telefono
router.get("/verificarUsuario", function(require,response){
    let url = `https://rnowgse00226-es.rightnowdemo.com/services/rest/connect/v1.3/contacts?q=customFields.c.numero_identificacion='${require.query.cc}'`
    axios.get(url,{headers: HEADERS}).then(data => {
        if(data.data.items.length == 0){
            response.status(200).send({
                'message':'El usuario no fue encontrado en la base de datos',
                'data': "-1"
            })
        }else{
            let uId = data.data.items[0].id
            url = `https://rnowgse00226-es.rightnowdemo.com/services/rest/connect/v1.3/contacts/${uId}`
            axios.get(url,{headers: HEADERS}).then(data=> {
                if(data.data.customFields.c.huella != require.query.id){
                    response.status(200).send({
                        'message':'La huella del usuario no corresponde con la recibida',
                        'data': "-1"
                    })
                }else{
                    if(data.data.customFields.c.telefono != require.query.telefono){
                        response.status(200).send({
                            'message':'El celular del usuario no corresponde con el recibido',
                            'data': "-1"
                        })
                    }else{
                        response.status(200).send({
                            'message':'La información del usuario fue correctamente validada',
                            'data': data.data.customFields.c.monto,
                            'user': data.data //Monto es string
                        })
                    }
                } //FALTA: comprobar si el teléfono se guarda en caso que no se tenga (no bancarizados) PATCH
            }).catch(error => {
                console.log(error)
                response.status(500).send({
                'message':'Hay un error en el servidor',
                'data': "-1"
            })})
        }}).catch(error => {
            console.log(error)
            response.status(500).send({
            'message':'Hay un error en el servidor',
            'data': "-1"
        })})
})



//recibe presupuesto, marca, categoria
router.get("/filtrarAutos", function(require,response){
    let presupuesto = require.query.presupuesto
    let marca = require.query.marca
    let categoria = require.query.categoria

    if(marca == 'todas'){
        marca = ''
    }else{
        marca = ' and MARCA=\'' + marca + '\''
    }

    if(categoria == '[]'){
        categoria = ''
    }else{
        categoria = categoria.replace("[", " and (CATEGORIA='");
        categoria = categoria.replace("]", "')");
        while(categoria.indexOf(',') > 0){
            categoria = categoria.replace(",", "' or CATEGORIA='");
        }
    }

    let url = `https://rnowgse00226-es.rightnowdemo.com/services/rest/connect/v1.3/BG.VEHICULO?q=COSTO<=${presupuesto}${marca}${categoria}&fields=CATEGORIA,COLOR,COSTO,DESCRIPCION,LINEA,MARCA,MODELO`
    axios.get(url,{headers: HEADERS}).then(data => {
        if(data.data.items.length == 0){
            response.status(200).send({
                'message':'El filtro no arrojó resultados',
                'data': []
            })
        }else{
            response.status(200).send({
                'message':'Búsqueda exitosa',
                'data': data.data.items
            })
        }}).catch(error => {response.status(500).send({
            'message':'Hay un error en el servidor',
            'data': []
        })})
})

//recibe marca
router.get("/obtenerConcesionarios", function(require,response){
    let url = `https://rnowgse00226-es.rightnowdemo.com/services/rest/connect/v1.3/BG.CONCESIONARIO?q=MARCA='${require.query.marca}'&fields=DIRECCION,LATITUD,LONGITUD,NOMBRE`
    axios.get(url,{headers: HEADERS}).then(data => {
        if(data.data.items.length == 0){
            response.status(200).send({
                'message':'No hay disponibilidad en ningún concesionario',
                'data': []
            })
        }else{
            //Acá pondría el método de ordenamiento por distancia al concesionario
            response.status(200).send({
                'message':'Búsqueda exitosa',
                'data': data.data.items
            })
        }}).catch(error => {
            console.log(error);
            response.status(500).send({
            'message':'Hay un error en el servidor',
            'data': []
        })})
})



//recibe usuario,monto,plazo,cuota,tipo,entrada,vehiculo,montoUsuario
router.post("/crearCredito", function(require,response){
    let url = 'https://rnowgse00226-es.rightnowdemo.com/services/rest/connect/v1.3/incidents'
    //FALTA: campo marca en concesionario (se había hablado sobre disponibilidad en todos los concesionarios)

    let body = {
        "subject": "Credito Aprobado",
        "primaryContact": {
            "id": require.body.usuario //ID del contacto
        },
        "statusWithType": {
            "status": {
                "id": 1 //1 - Pre-aprobado 2 - Aprobado
            }
        },
        "customFields": {
            "c": {
                "monto": require.body.monto.toString(),
                "numero_cuotas": parseInt(require.body.plazo),
                "valor_cuota": require.body.cuota.toString(),
                "tipo_credito": {
                    "id": require.body.tipo //28 - Alemán, 27 - Frances
                },
                "fecha_vigencia": "2019-01-01",
                "valor_entrada": "5135123"
            },
            "BG": {
                "VEHICULO": {
                    "id": require.body.vehiculo
                }
            }
        }
    }
    console.log("--------------------------------------");

    //console.log(JSON.parse(JSON.stringify(body)));

    axios.post(url, body
    ,{headers: HEADERS}).then(data => {
        response.send(data.data)
        }).catch(error => {
            console.log(error)
            response.status(500).send({
            'message':'Hay un error en el servidor',
            'data': []
        })})
})



app.listen(port, function(){
    console.log('server started '+ port);
});
