function register(user) {
    return dispatch => {
        console.dir(user);
        return axios.post("http://localhost:3000/insUsu/",user        
            ).then(function (response) {
                console.dir(response);
                if(response.status===200){
                    
                    switch (response.data.error.code) {
                        case 11000:
                            // dispatch(failure('El Usuario ya existe'));
                            // dispatch(alertActions.error('El Usuario ya existe'));
                            return;
                                                  
                        default:
                            // dispatch(failure('Error al registrarse'));
                            // dispatch(alertActions.error('Error al registrarse'));
                      }
                    // console.log('Error de con el Usuario');
                    // dispatch(failure(response.data.error.errmsg));
                    // dispatch(alertActions.error(response.data.error.errmsg));
                }
                    
                console.log('>exitox');

                //     dispatch(success());
                //     history.push('/login');
                //     dispatch(alertActions.success('Registration successful'));
                    
                    
                    //     // user => { 
                    //     // dispatch(success());
                    //     // history.push('/login');
                    //     // dispatch(alertActions.success('Registration successful'));
                    // }
            })
            .catch(function (error) {
                console.log('>fracaso');
//                console.log(error);
             dispatch(failure(error));
             dispatch(alertActions.error(error));
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