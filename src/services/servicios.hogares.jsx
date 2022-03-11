import axios from 'axios';
import ConstantsList from '@constants/Constants';
import AuthHeader from '@services/auth-header';

const serviciosHogares = {
    getHogaresByUsername,
    updateHogarByNumeroContrato,
    getCantidadHogaresByUsername,
    getHogaresAndLecturas,
    getHogarAndLectura,
    getHogarLectura,
    registerNewHome,
}

function getHogaresByUsername(success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.get(API_ENDPOINT + 'home/homes-user', AuthHeader.headers())
        .then(success)
        .catch(error);
}

function getCantidadHogaresByUsername(success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.get(API_ENDPOINT + 'home/cantidad-hogares-usuario', AuthHeader.headers())
        .then(success)
        .catch(error);
}

function getHogaresAndLecturas(success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.get(API_ENDPOINT + 'home/hogares-y-lecturas-usuario', AuthHeader.headers())
        .then(success)
        .catch(error);
}

function getHogarAndLectura(numeroContrato, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.get(API_ENDPOINT + 'home/hogar-consumo/' + numeroContrato, AuthHeader.headers())
        .then(success)
        .catch(error);
}

function getHogarLectura(numeroContrato, tiposervicio, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/hogar-lectura', { numeroContrato: numeroContrato, tiposervicio: tiposervicio },
        AuthHeader.headers())
        .then(success)
        .catch(error);
}

function updateHogarByNumeroContrato(hogar, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.put(API_ENDPOINT + 'home/editar-hogar', hogar, AuthHeader.headers())
        .then(success)
        .catch(error);
}

function registerNewHome(newHome, success, error) {
    const { API_ENDPOINT } = ConstantsList;
    axios.post(API_ENDPOINT + 'home/create-home', newHome, AuthHeader.headers())
        .then(success)
        .catch(error);
}

export default serviciosHogares