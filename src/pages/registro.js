
import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux';

import { userActions } from '../state/_actions';
import Layout from '../components/layout'
import Footer from '../components/footer'


import loadImg from '../images/loading2.svg'
import { history } from '../state/_helpers';
import { alertActions } from '../state/_actions';



import { Field, reduxForm } from 'redux-form'
import { SubmissionError } from 'redux-form'

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Correo Electronico Invalido'
        : undefined

const fitLength = len => value =>
    value && value.length != len ? `Debe ser de ${len} numeros` : undefined
const Length10 = fitLength(10)

const number = value =>
    value && isNaN(Number(value)) ? 'Debe ser un numero' : undefined


const required = value => (value || typeof value === 'number' ? undefined : 'Requerido')

const passwordsMustMatch = (value, allValues) => 
  value !== allValues.usuPassword ? 
    'Contraseñas no coinciden' :
     undefined



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = (async function showResults(values) {
    await sleep(500); // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
function submito(user) {
    
    console.log('holat')
    return sleep(1000).then(() => {
        console.dir(user)
        console.log('holax')
        //        userActions.register(user)

        // simulate server latency
        //   if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        //     throw new SubmissionError({
        //       username: 'User does not exist',
        //       _error: 'Login failed!'
        //     })
        //   } else if (values.password !== 'redux-form') {
        //     throw new SubmissionError({
        //       password: 'Wrong password',
        //       _error: 'Login failed!'
        //     })
        //   } else {
        //     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        //   }
    })
}



class Register extends React.Component {

    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log('>' + props)

    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });

    }

    handleSubmit(event) {
        // event.preventDefault();

         this.setState({ submitted: true });
        // const { user } = this.state;
        // const { dispatch } = this.props;
        // if (user.firstName && user.lastName && user.username && user.password) {
        //     dispatch(userActions.register(user));
        // }
        // console.log('xD')
    }

    // example() {
    example = values => {
      
        console.dir(values);
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        // if (user.firstName && user.lastName && user.username && user.password) {
        dispatch(userActions.register(values));
        // }

    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        const { simplex } = this.props;

        return (

            <Layout>
                <button onClick={this.example}>ejemplo</button>
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Registro</h2>
                                {/* Breadcrumbs */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 offset-xl-3">
                            <div className="login-register-page">
                                {/* Welcome Text */}
                                <div className="welcome-text">
                                    <h3 style={{ fontSize: '26px' }}>Crea tu Usuario!</h3>
                                    <span>Acceder a tu cuenta en su lugar <Link to="/login/" > Logeate</Link></span>
                                </div>
                                {/* Account Type */}
                                <div className="account-type">
                                    <div>
                                        <input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" defaultChecked />
                                        <label htmlFor="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle" /> Alumno</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio" />
                                        <label htmlFor="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center" /> Administrador</label>
                                    </div>
                                </div>
                                {/* Form */}

                                <Formito onSubmit={this.example} />
                                {/* <Formito onSubmit={userActions.register(user)} /> */}
                                {simplex && <img src={loadImg} />}
                                {/* <Formito onSubmit={ submito(user)}/> */}
                                {/* Social Login */}
                                <div className="social-login-separator"><span>or</span></div>
                                <div className="social-login-buttons">
                                    <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Register via Facebook</button>
                                    <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g" /> Register via Google+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-top-100" />


                <Footer />


            </Layout>
        )
    }
}


function mapStateToProps(state) {
    const { registering } = state.registration;
    
    return {
        registering
    };
}

const renderField = ({
    input,
    label,
    type,
    placeholder,
    icon,
    className,
    meta: { touched, error, warning }
}) => (
        <div className="input-with-icon-left">
            <i className={icon} />
            <input {...input} placeholder={placeholder} type={type} className={className} />
            {/* <div class="alert alert-danger" role="alert"></div> */}
            {touched &&
                ((error && <span className="alert alert-danger">{error}</span>) ||
                    (warning && <span>{warning}</span>))}


        </div>
        
    )

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (

        <form onSubmit={handleSubmit}>
            {/* <div className="input-with-icon-left"> */}
            {/* <i className="icon-line-awesome-user" />          */}
            <Field
                name="usuNombre"
                component={renderField}
                type="text"
                placeholder="Nombre"
                className="input-text with-border"
                icon="icon-line-awesome-user"
                validate={required}
            />

            {/* </div> */}
            {/* <div className="input-with-icon-left">
            <i className="icon-material-baseline-mail-outline" />          */}
            <Field
                name="usuUsuario"
                component={renderField}
                type="text"
                placeholder="Correo Electronico"
                className="input-text with-border"
                icon="icon-material-baseline-mail-outline"
                validate={[email, required]}
            />

            {/* </div> */}

            {/* <div className="input-with-icon-left">
            <i className="icon-line-awesome-barcode" />          */}
            <Field
                name="usuCodAlumno"
                component={renderField}
                type="text"
                placeholder="Codigo Universitario"
                className="input-text with-border"
                icon="icon-line-awesome-barcode"
                validate={[Length10, required, number]}
            />

            {/* </div> */}

            {/* <div className="input-with-icon-left">
                <i className="icon-line-awesome-key" /> */}
            <Field
                name="usuPassword"
                component={renderField}
                type="password"
                placeholder="Contraseña"
                className="input-text with-border"
                icon="icon-line-awesome-key"
                validate={[required, number]}
            />

            {/* </div> */}

            {/* <div className="input-with-icon-left">
                <i className="icon-line-awesome-key" /> */}
                <Field
                    name="rep_contrasena"
                    component={renderField}
                    type="password"
                    placeholder="Repita la contraseña"
                    className="input-text with-border"
                    icon="icon-line-awesome-key"
                    validate={[required, passwordsMustMatch]}
                    
                />

            {/* </div> */}
            {/* <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Register <i className="icon-material-outline-arrow-right-alt" /></button> */}
            <button type="submit" className="button full-width button-sliding-icon ripple-effect margin-top-10" disabled={pristine || submitting}>
                Registrarse <i className="icon-material-outline-arrow-right-alt" />
                {true &&
                    <img src={loadImg} />
                }
            </button>



        </form>
    )
}


const Formito = reduxForm({
    form: 'simplex', // a unique identifier for this form
    // onSubmit: submito
})(SimpleForm)





export default connect(mapStateToProps)(Register);

//export default Register;
//export default connect(mapStateToProps)(Register);
