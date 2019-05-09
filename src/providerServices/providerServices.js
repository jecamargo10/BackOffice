import config from './const';
import axios from 'axios'

function verifyUser(id, cc, cellphone, callback){
    axios.get(`${config.host}/verificarUsuario?cc=${cc}&id=${id}&telefono=${cellphone}`).then(response => {
        return callback(false, response)
    }).catch(err => {
        return callback(true, 'Internal Error' + err.toString())
    })
}

export default  {
    verifyUser
}