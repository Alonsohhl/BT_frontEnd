import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import axios from 'axios';


// actions.js
export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod,
  });
  
  export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
  });
  


export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function register(user) {
    return dispatch => {
        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
              withCredentials: true,
              credentials: 'same-origin',
        };
        console.dir(user);
        return axios.post("http://localhost:3000/insUsu/",user        
            ).then(function (response) {
                console.dir(response);
                console.log('>exito');
                    //     // user => { 
                    //     // dispatch(success());
                    //     // history.push('/login');
                    //     // dispatch(alertActions.success('Registration successful'));
                    // }
            })
            .catch(function (error) {
                console.log('>fracaso');
                console.log(error);
            });
            console.log("Registrado")
        // dispatch(request(user));


        // userService.register(user)
        //     .then(
        //         user => { 
        //             dispatch(success());
        //             history.push('/login');
        //             dispatch(alertActions.success('Registration successful'));
        //         },
        //         error => {
        //             dispatch(failure(error));
        //             dispatch(alertActions.error(error));
        //         }
        //     );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}