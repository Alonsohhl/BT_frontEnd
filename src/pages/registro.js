
import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux';

import { userActions } from '../state/_actions';
import Layout from '../components/layout'
import Footer from '../components/footer'


import { Field, reduxForm } from 'redux-form'


const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const required = value => (value || typeof value === 'number' ? undefined : 'Requerido')


class Register extends React.Component {

    constructor(props) {
        super(props);

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
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;

        return (
            
            <Layout>
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
                                

                                <Formito onSubmit={userActions.register(user)}/>
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
}//)


function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

// const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
// export { connectedRegisterPage as Register };


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
        <input {...input} placeholder={placeholder} type={type} className={className}/>
        {/* <div class="alert alert-danger" role="alert"></div> */}
        {touched &&
          ((error && <span  class="alert alert-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
        
        
    </div>
    // <div>
    //   <label>{label}</label>
    //   <div>
    //     <input {...input} placeholder={label} type={type} />
    //     {touched &&
    //       ((error && <span>{error}</span>) ||
    //         (warning && <span>{warning}</span>))}
    //   </div>
    // </div>
  )


const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (      

      <form onSubmit={handleSubmit}>
        {/* <div className="input-with-icon-left"> */}
            {/* <i className="icon-line-awesome-user" />          */}
            <Field
              name="firstName"
              component={renderField}
              type="text"
              placeholder="Nombre"
              className="input-text with-border"
              icon="icon-line-awesome-user"
              validate={required}
            />
         
        {/* </div> */}
        <div className="input-with-icon-left">
            <i className="icon-material-baseline-mail-outline" />         
            <Field
              name="mail"
              component="input"
              type="text"
              placeholder="Correo Electronico"
              className="input-text with-border"
              validate={[email,required]}
            />
         
        </div>

        <div className="input-with-icon-left">
            <i className="icon-line-awesome-barcode" />         
            <Field
              name="codigoucsm"
              component="input"
              type="text"
              placeholder="Codigo Universitario"
              className="input-text with-border"
            />
         
        </div>

        <div className="input-with-icon-left">
            <i className="icon-line-awesome-key" />         
            <Field
              name="contrasena"
              component="input"
              type="password"
              placeholder="Contraseña"
              className="input-text with-border"
            />
         
        </div>

        <div className="input-with-icon-left">
            <i className="icon-line-awesome-key" />         
            <Field
              name="rep_contrasena"
              component="input"
              type="password"
              placeholder="Repita la contraseña"
              className="input-text with-border"
            />
         
        </div>
        {/* <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Register <i className="icon-material-outline-arrow-right-alt" /></button> */}
        <button type="submit" className="button full-width button-sliding-icon ripple-effect margin-top-10"  disabled={pristine || submitting}>
        Registrarse <i className="icon-material-outline-arrow-right-alt" />
        </button>
        
        
      </form>
    )
  }


  const Formito = reduxForm({
    form: 'simplex' // a unique identifier for this form
  })(SimpleForm)

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const showResults =  (async function showResults(values) {
    await sleep(500); // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }); 

export default connect(mapStateToProps)(Register);

//export default Register;
//export default connect(mapStateToProps)(Register);
