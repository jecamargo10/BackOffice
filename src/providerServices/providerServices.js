import config from './const';
import axios from 'axios'

function verifyUser(id, cc, cellphone, callback){
    axios.get(`${config.host}/verificarUsuario?cc=${cc}&id=${id}&telefono=${cellphone}`).then(response => {
        return callback(false, response)
    }).catch(err => {
        return callback(true, 'Internal Error' + err.toString())
    })
}

function filterVehicles(amount, brand, category, callback){
    axios.get(`${config.host}/filtrarAutos?presupuesto=${amount}&marca=${brand}&categoria=[${category}]`).then(response => {
        return callback(false, response)
    }).catch(err => {
        return callback(true, 'Internal Error' + err.toString())
    })
}

function crearCredito(usuario, monto, plazo, cuota, tipo, callback){
    let body = {
        usuario, monto, plazo, cuota, tipo
    }
    axios.post(`${config.host}/crearCredito`, body).then(response => {
        return callback(false, response)
    }).catch(err => {
        return callback(true, 'Internal Error' + err.toString())
    })
}

export default  {
    verifyUser, filterVehicles
}